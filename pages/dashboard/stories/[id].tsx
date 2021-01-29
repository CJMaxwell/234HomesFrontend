import { useEffect, useMemo, useState } from 'react';
import { convertToRaw } from 'draft-js';
import { convertFromHTML } from 'draft-convert';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import DashboardLayout from '../../../components/Layouts/DashboardLayout';
import useStories from '../../../hooks/useStories';

const EditStory = dynamic(() => import('../../../components/templates/EditStory'), {
  ssr: false,
});

const EditStoryPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { story, getStory } = useStories();
  const [file, setFile] = useState<File>(null);

  useEffect(() => {
    if (id) {
      getStory(id as string);
    }
  }, [id]);

  useEffect(() => {
    if (story) {
      fetch(story.post.banner)
        .then((response) => response.blob())
        .then((data) => {
          const metadata = {
            type: 'image/jpeg',
          };
          const newFile = new File([data], 'banner.jpg', metadata);
          setFile(newFile);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [story]);

  const initialData = useMemo(() => {
    if (story && file) {
      return {
        title: story.post.title,
        banner: file,
        featured: story.post.featured,
        body: convertToRaw(convertFromHTML(story.post.body)),
      };
    }
    return null;
  }, [story, file]);

  return (
    <DashboardLayout>{story && file && <EditStory initialData={initialData} />}</DashboardLayout>
  );
};

export default EditStoryPage;

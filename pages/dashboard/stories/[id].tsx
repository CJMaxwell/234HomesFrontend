import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const Editor = dynamic(() => import('../../../components/Organisms/Editor'), { ssr: false });

const Story = () => {
  const router = useRouter();
  const { id } = router.query;

  return <Editor mode="edit" id={id as string} />;
};

export default Story;

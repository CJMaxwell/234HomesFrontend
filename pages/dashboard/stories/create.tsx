import dynamic from 'next/dynamic';
import DashboardLayout from '../../../components/Layouts/DashboardLayout';

const CreateStory = dynamic(() => import('../../../components/templates/CreateStory'), {
  ssr: false,
});

const CreateStoryPage: React.FC = () => {
  return (
    <DashboardLayout>
      <CreateStory />
    </DashboardLayout>
  );
};

export default CreateStoryPage;

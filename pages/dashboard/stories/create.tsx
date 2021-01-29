import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('../../../components/Organisms/Editor'), { ssr: false });

const CreatePage: React.FC = () => {
  return <Editor />;
};

export default CreatePage;

import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('../../../components/Organisms/Editor'), { ssr: false });

const Create: React.FC = () => {
  return <Editor />;
};

export default Create;

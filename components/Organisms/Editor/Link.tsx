import styles from './styles';

const Link = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { url } = props.contentState.getEntity(props.entityKey).getData();
  return (
    <a href={url} style={styles.link}>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      {props.children}
    </a>
  );
};

export default Link;

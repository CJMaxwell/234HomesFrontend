const Image = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { height, src, width } = props.contentState.getEntity(props.entityKey).getData();

  // eslint-disable-next-line jsx-a11y/alt-text
  return <img src={src} height={height} width={width} />;
};

export default Image;

const CustomImage = ({ src, title, width, height }) => {
  return (
    <img
      style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
      src={src}
      alt={title}
      width={width}
      height={height}
    />
  );
};

export default CustomImage;

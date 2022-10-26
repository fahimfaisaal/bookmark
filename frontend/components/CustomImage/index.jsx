const CustomImage = ({ src, title, width, height }) => {
  return (
    <img
      style={{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
      }}
      src={src}
      alt={title}
      width={width}
      height={height}
    />
  );
};

export default CustomImage;

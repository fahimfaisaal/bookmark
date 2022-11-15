import { adjustValidURL } from '../../utils';

function CustomImage({ src, alt, width, height, ...props }) {
  return (
    <img
      style={{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%'
      }}
      src={adjustValidURL(src)}
      alt={alt}
      width={width}
      height={height}
      {...props}
    />
  );
}

export default CustomImage;

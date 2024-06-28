import React from 'react';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';

const PostSkeleton = () => (
  <ContentLoader 
    speed={2}
    width={400}
    height={475}
    viewBox="0 0 400 475"
    backgroundColor="#333"
    foregroundColor="#ecebeb"
    style={{paddingHorizontal:10}}
  >
    <Rect x="0" y="0" rx="5" ry="5" width="70" height="70" /> 
    <Rect x="80" y="0" rx="4" ry="4" width="300" height="13" /> 
    <Rect x="80" y="25" rx="4" ry="4" width="250" height="10" /> 
    <Rect x="0" y="80" rx="4" ry="4" width="380" height="200" /> 
    <Rect x="0" y="290" rx="4" ry="4" width="100" height="10" /> 
    <Rect x="0" y="305" rx="4" ry="4" width="100" height="10" /> 
    <Rect x="0" y="320" rx="4" ry="4" width="100" height="10" /> 
  </ContentLoader>
)

export default PostSkeleton;

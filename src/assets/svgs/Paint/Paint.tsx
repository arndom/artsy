import Lottie from 'react-lottie-player';
import * as animationData from './PaintData.json';

export const Paint = () => <Lottie loop animationData={animationData} play />;

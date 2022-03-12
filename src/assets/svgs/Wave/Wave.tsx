import Lottie from 'react-lottie-player';
import * as animationLiveData from './waveLiveData.json';
import * as animationDeadData from './waveDeadData.json';

interface IWave {
  live?: boolean;
}

export const Wave = ({ live = false }: IWave) =>
  live ? <Lottie loop animationData={animationLiveData} play /> : <Lottie loop animationData={animationDeadData} />;

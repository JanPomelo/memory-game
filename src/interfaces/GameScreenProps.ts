interface GameScreenProps {
  difficulty: string;
  tyre: { tyreType: string; color: string };
  onStartPageClick: () => void;
  sound: boolean;
}

export default GameScreenProps;

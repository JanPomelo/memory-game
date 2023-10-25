interface GameScreenProps {
  difficulty: string;
  tyre: { tyreType: string; color: string };
  onStartPageClick: () => void;
}

export default GameScreenProps;

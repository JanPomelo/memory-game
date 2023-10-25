interface MemoryCardProps {
  driverName: string;
  driverNumber: string;
  imageSrc: string;
  clicked: boolean;
  id: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  backTurn: string;
}

export default MemoryCardProps;

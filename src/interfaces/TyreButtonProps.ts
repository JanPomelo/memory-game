import LoadingTyreProps from "./LoadingTyreProps";

interface TyreButtonProps extends LoadingTyreProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default TyreButtonProps
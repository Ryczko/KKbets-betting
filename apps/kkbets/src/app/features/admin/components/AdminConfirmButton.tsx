import Button from '../../../components/Button/Button';

type AdminConfirmButtonProps = {
  onConfirm: () => void;
  content: string;
};

export default function AdminConfirmButton({ content, onConfirm }: AdminConfirmButtonProps) {
  return (
    <Button fill style={{ marginTop: '16px', float: 'right' }} click={onConfirm}>
      {content}
    </Button>
  );
}

import { Loading } from '../Loading';
import { Snackbar } from '../Snackbar';
import { useFetch } from '@shared/hooks';
import { ReturnButton } from '../ReturnButton';
import { Modal } from '../Modal';

export const Tools = () => {
  const { loading } = useFetch();
  return (
    <>
      {loading && <Loading rendering />}
      <Snackbar />
      <Modal />
      <ReturnButton isSticky />
    </>
  );
};

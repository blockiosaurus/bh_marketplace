import styled from 'styled-components';
import { Fuse } from '@/components/Fuse';
import { ConnectButton } from '@/components/ConnectButton';
import { useUserWallet } from '@/hooks/useUserWallet';
import { useShopStore } from '@/store/useShopStore';

const MyCollection: React.FC = () => {
  const candyShop = useShopStore((s) => s.candyShop);
  const userWallet = useUserWallet();
  if (!candyShop) return null;

  return (
    <DesContainer>
      <h1 style={{ marginBottom: 30 }}>My Collection</h1>
      <Fuse
        wallet={userWallet}
        walletConnectComponent={<ConnectButton />}
      />
    </DesContainer>
  );
};

export default MyCollection;

const DesContainer = styled.div`
  width: 100%;

  .wallet-adapter-button {
    margin: 0 auto;
  }
`;

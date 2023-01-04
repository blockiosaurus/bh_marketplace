import styled from 'styled-components';
import { Orders, Stat } from '@liqnft/candy-shop';
import { ConnectButton } from '@/components/ConnectButton';
import { useUserWallet } from '@/hooks/useUserWallet';
import { useShopStore } from '@/store/useShopStore';

const Marketplace: React.FC = () => {
  const candyShop = useShopStore((s) => s.candyShop);
  const userWallet = useUserWallet();

  if (!candyShop) return null;

  return (
    <DesContainer>
      <Stat
        candyShop={candyShop}
        title={'Marketplace'}
        description={
          'Bread Heads marketplace for buying and selling in CRUMBS'
        }
        style={{ paddingBottom: 50 }}
      />

      <Orders
        wallet={userWallet}
        candyShop={candyShop}
        walletConnectComponent={<ConnectButton />}
        search
      />
    </DesContainer>
  );
};

export default Marketplace;
const DesContainer = styled.div`
  width: 100%;
`;

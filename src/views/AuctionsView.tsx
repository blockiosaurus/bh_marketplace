import styled from 'styled-components';
import { Auctions } from '@liqnft/candy-shop';
import { ConnectButton } from '@/components/ConnectButton';
import { useUserWallet } from '@/hooks/useUserWallet';
import { useShopStore } from '@/store/useShopStore';

const AuctionsView: React.FC = () => {
  const userWallet = useUserWallet();
  const candyShop = useShopStore((s) => s.candyShop);

  return (
    <DesContainer>
      <h1 style={{ marginTop: 40, marginBottom: 15 }}>Auctions</h1>
      <p style={{ marginBottom: 40 }}>
        Note: Only shop owners can create auction.
      </p>
      {candyShop && (
        <Auctions
          candyShop={candyShop}
          wallet={userWallet}
          walletConnectComponent={<ConnectButton />}
        />
      )}
    </DesContainer>
  );
};

export default AuctionsView;
const DesContainer = styled.div`
  width: 100%;

  p > a {
    color: #fff;
    text-decoration: underline;
  }
`;

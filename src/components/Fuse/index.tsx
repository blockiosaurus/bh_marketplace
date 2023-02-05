import React, { useCallback, useMemo, useState } from 'react';
import { AnchorWallet } from '@solana/wallet-adapter-react';
import { EthWallet } from '@liqnft/candy-shop';
import { useConnection } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
// import { FindNftsByOwnerOutput, Metaplex } from '@metaplex-foundation/js';

interface FuseProps {
  wallet?: AnchorWallet | EthWallet | undefined;
  walletConnectComponent: React.ReactElement;
  style?: { [key: string]: string | number } | undefined;
}

export const Fuse: React.FC<FuseProps> = ({ walletConnectComponent, style, wallet }) => {
  const connection = useConnection().connection;
  // const metaplex = Metaplex.make(connection);
  // const [nftList, setNftList] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const fetchNFTs = async () => {
    if (wallet && wallet.publicKey && (wallet.publicKey instanceof PublicKey)) {
      try {
        setLoading(true);
        // const list = await metaplex.nfts().findAllByOwner({ owner: wallet.publicKey});
        // setNftList(list);
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <div style={style}>
      Coming Soon
      {/* {JSON.stringify(nftList)} */}
    </div>
  );
};

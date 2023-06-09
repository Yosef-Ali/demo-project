import { createBoard } from '@wixc3/react-board';
import { ProductItem } from '../../../components/product-item/product-item';
import itemPhoto from '../../../assets/matcha-tea.png';

export default createBoard({
    name: 'Matcha Tea ',
    Board: () => (
        <ProductItem
            itemName="Matcha Tea"
            itemPhotoURL={itemPhoto}
            itemPrice={9.99}
            itemDescription="240 calories, 32g sugar, 7g fat."
        />
    ),
    environmentProps: {
        windowWidth: 600,
        windowHeight: 800,
    },
});

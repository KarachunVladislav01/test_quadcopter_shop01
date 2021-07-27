import { Quadcopter } from "../../redux/redusers/quadcopters.reducer";

export interface ProductCardProps {
    style?: object;
    product: Quadcopter;
    onPress: (event) => void;
}

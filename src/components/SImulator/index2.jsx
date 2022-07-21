import './index.css'
import { useParser } from '../../utils/useParser';
import {ReactComponent as CanvasSVG} from '../../assets/simulator.svg'

export const CustomSimulator = () => {
    const {codeGenerator} = useParser();

    const fruits = ["Apple", "Banana", "Pineapple", "Strawberry"];

    return (
        <div className="game-simulator">
            <div className='v-stack'>
                {fruits.map((fruit) => (
                    <div>{fruit}</div>
                ))}
                {codeGenerator(fruits)}
            </div>
            {codeGenerator()}
            <CanvasSVG id='simulator-svg'/>
        </div>
    );
};
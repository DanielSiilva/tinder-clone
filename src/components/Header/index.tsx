import { BatteryChargingVertical, CellSignalFull, WifiHigh } from 'phosphor-react'
import {
    Container
} from './styles'



export function Header(){


    return (
        <Container>
            <div>
                <p>9:41</p>
            </div>

            <div>
                <CellSignalFull size={18} weight='fill'/>
                <WifiHigh size={18} weight='fill'/>
                <BatteryChargingVertical size={18} weight='fill' color='green'/>
            </div>
        </Container>
    )
}
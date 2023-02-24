import {
    Wrapper,
    LogoContainer,
    Content,
    FooterContainer,
    PhotoProfile,
    ProfileInfo
} from "./styled"

import Logo from  '../../assets/Logo.svg'
import { Heart, XCircle } from "phosphor-react"
import { useContext } from "react"
import { MatchContext } from "../../context/MatchContext"



export function Home (){
    const {profile} = useContext(MatchContext)


    return(
        <Wrapper>
            <LogoContainer src={Logo} alt='logo to app: tinder'/>
            <Content>
                <PhotoProfile 
                    src={profile.photo}
                    alt={profile.photo_alt}
                    title={profile.name}
                 />
                
                <ProfileInfo>
                    <p>{profile.name}, <span>{profile.age}</span> anos</p>
                    <p>Bio: <span>{profile.bio}</span></p>
                </ProfileInfo>
            </Content>


            <FooterContainer>
                <button title="rejeitar">
                    <XCircle 
                        size={50} 
                        weight='fill' 
                        color="red"
                    />
                </button>
                
                <button title="adicionar">
                    <Heart 
                        size={50} 
                        weight='fill' 
                        color="green"
                    />
                </button>
            </FooterContainer>
        </Wrapper>


    )
}
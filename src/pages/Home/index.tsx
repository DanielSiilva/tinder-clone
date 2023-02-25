import {
    Wrapper,
    LogoAndListContainer,
    Content,
    FooterContainer,
    PhotoProfile,
    ProfileInfo
} from "./styled"

import Logo from  '../../assets/Logo.svg'
import { Heart, UserList, XCircle } from "phosphor-react"
import { useContext } from "react"
import { MatchContext } from "../../context/MatchContext"
import { NavLink } from "react-router-dom"



export function Home (){
    const {profile, fetchPostMatches} = useContext(MatchContext)

   


    return(
        <Wrapper>
            <LogoAndListContainer>
                <img src={Logo} alt='logo to app: tinder'/>
                <NavLink to={'/matches'}>
                    <UserList size={32} weight='fill'/>
                </NavLink>
                
            </LogoAndListContainer>

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
                
                <button title="adicionar" onClick={fetchPostMatches}>
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
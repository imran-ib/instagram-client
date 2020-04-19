import styled from 'styled-components';
import { Search } from '@styled-icons/evil/Search';
import { Home } from '@styled-icons/foundation/Home';
import { User } from '@styled-icons/boxicons-solid/User';
import { Direction } from '@styled-icons/entypo/Direction';
import { Heart } from '@styled-icons/evil/Heart';
import { Heart as SolidHeart } from '@styled-icons/evaicons-solid/Heart';
import { CompassOutline } from '@styled-icons/evaicons-outline/CompassOutline';
import { DotsHorizontal } from '@styled-icons/heroicons-outline/DotsHorizontal';
import { MessageRounded } from '@styled-icons/boxicons-regular/MessageRounded';
import { Bookmark } from '@styled-icons/feather/Bookmark';

export const BookmarkIcon = styled(Bookmark)`
  width: 30px;
  border: none;
`;
export const MessageRoundedIcon = styled(MessageRounded)`
  width: 30px;
  border: none;
`;

export const SearchIcon = styled(Search)`
  width: 20px;
  fill: ${({ theme }) => theme.darkGreyColor};
  border: none;
`;

export const DotsHorizontalIcon = styled(DotsHorizontal)`
  fill: ${({ theme }) => theme.darkGreyColor};
  width: 20px;
  border: none;
`;
export const HomeIcon = styled(Home)`
  width: 30px;
  border: none;
`;
export const UserIcon = styled(User)`
  width: 30px;
  border: none;
`;
export const DirectionIcon = styled(Direction)`
  width: 30px;
  border: none;
`;
export const HeartIcon = styled(Heart)`
  width: 30px;
  border: none;
`;
export const SolidHeartIcon = styled(SolidHeart)`
  width: 30px;
  border: none;
  fill: red;
`;
export const HeartIconSmall = styled(Heart)`
  width: 18px;
  border: none;
`;
export const CompassOutlineIcon = styled(CompassOutline)`
  width: 30px;
  border: none;
`;

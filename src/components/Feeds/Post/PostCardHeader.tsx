import React, { useState } from 'react';
import styled from 'styled-components';
import { UserIcon, DotsHorizontalIcon } from '../../../styles/Icons';
import Link from 'next/link';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

const PostCardHeaderStyled = styled.div`
  min-height: 60px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .user {
    display: flex;
    align-items: center;
    .avatar {
      a {
        color: black;
        border: 1px solid black;
        border-radius: 50%;
      }
    }
    .username {
      a {
        color: #262626;
        margin-left: 12px;
        text-decoration: none;
        font-weight: 500;
      }
    }
  }
`;

type PostCardHeaderProps = {
  username: string;
  avatar?: string;
};

const PostCardHeader: React.FC<PostCardHeaderProps> = ({
  username,
  avatar,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <PostCardHeaderStyled className="card-header">
      <div className="user">
        <div className="avatar">
          <Link href="/profile/username">
            <a>{avatar ? <img src={avatar} alt={username} /> : <UserIcon />}</a>
          </Link>
        </div>
        <div className="username">
          <Link href="/profile/username">
            <a>{username}</a>
          </Link>
        </div>
      </div>

      <div className="menu">
        <a onClick={handleShow}>
          <DotsHorizontalIcon />
        </a>
      </div>

      <Modal centered show={show} onHide={handleClose} animation={true}>
        <Modal.Body>
          <ListGroup variant="flush">
            <ListGroup.Item className="text-center font-weight-bold" disabled>
              Report Inappropriate
            </ListGroup.Item>
            <ListGroup.Item className="text-center font-weight-bold" disabled>
              Follow
            </ListGroup.Item>
            <ListGroup.Item className="text-center font-weight-bold" disabled>
              Fo To Post
            </ListGroup.Item>
            <ListGroup.Item className="text-center font-weight-bold" disabled>
              Cancle
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
      </Modal>
    </PostCardHeaderStyled>
  );
};

export default PostCardHeader;

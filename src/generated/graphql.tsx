import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  posts: Array<Post>;
  Feeds: Array<Post>;
  /** Get Single Post */
  Post?: Maybe<Post>;
  /** Get All Comments for One Post */
  Comments?: Maybe<Array<Comment>>;
  /** User Search Filter */
  UserSearch?: Maybe<Array<User>>;
  /** Post Search Filter */
  SearchPost?: Maybe<Array<Post>>;
  /** Get Single Room */
  Room: Room;
  /** Current User */
  CurrentUser?: Maybe<User>;
};

export type QueryPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<PostWhereUniqueInput>;
  before?: Maybe<PostWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryFeedsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
};

export type QueryPostArgs = {
  postId: Scalars['String'];
};

export type QueryCommentsArgs = {
  postId: Scalars['String'];
};

export type QueryUserSearchArgs = {
  term: Scalars['String'];
};

export type QuerySearchPostArgs = {
  term: Scalars['String'];
};

export type QueryRoomArgs = {
  roomId: Scalars['String'];
};

export type PostWhereInput = {
  id?: Maybe<StringFilter>;
  location?: Maybe<NullableStringFilter>;
  caption?: Maybe<StringFilter>;
  authorId?: Maybe<StringFilter>;
  files?: Maybe<FileFilter>;
  likes?: Maybe<LikeFilter>;
  comments?: Maybe<CommentFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<PostWhereInput>>;
  OR?: Maybe<Array<PostWhereInput>>;
  NOT?: Maybe<Array<PostWhereInput>>;
  author?: Maybe<UserWhereInput>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type NullableStringFilter = {
  equals?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type FileFilter = {
  every?: Maybe<FileWhereInput>;
  some?: Maybe<FileWhereInput>;
  none?: Maybe<FileWhereInput>;
};

export type FileWhereInput = {
  id?: Maybe<StringFilter>;
  file?: Maybe<StringFilter>;
  postId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<FileWhereInput>>;
  OR?: Maybe<Array<FileWhereInput>>;
  NOT?: Maybe<Array<FileWhereInput>>;
  post?: Maybe<PostWhereInput>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  not?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
};

export type LikeFilter = {
  every?: Maybe<LikeWhereInput>;
  some?: Maybe<LikeWhereInput>;
  none?: Maybe<LikeWhereInput>;
};

export type LikeWhereInput = {
  id?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
  postId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<LikeWhereInput>>;
  OR?: Maybe<Array<LikeWhereInput>>;
  NOT?: Maybe<Array<LikeWhereInput>>;
  user?: Maybe<UserWhereInput>;
  post?: Maybe<PostWhereInput>;
};

export type UserWhereInput = {
  id?: Maybe<StringFilter>;
  avatar?: Maybe<NullableStringFilter>;
  username?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  firstName?: Maybe<NullableStringFilter>;
  lastName?: Maybe<NullableStringFilter>;
  fullName?: Maybe<NullableStringFilter>;
  bio?: Maybe<StringFilter>;
  loginSecret?: Maybe<NullableStringFilter>;
  posts?: Maybe<PostFilter>;
  likes?: Maybe<LikeFilter>;
  comments?: Maybe<CommentFilter>;
  rooms?: Maybe<RoomFilter>;
  followedBy?: Maybe<UserFilter>;
  following?: Maybe<UserFilter>;
  messegesSent?: Maybe<MessageFilter>;
  messegesReceived?: Maybe<MessageFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
};

export type PostFilter = {
  every?: Maybe<PostWhereInput>;
  some?: Maybe<PostWhereInput>;
  none?: Maybe<PostWhereInput>;
};

export type CommentFilter = {
  every?: Maybe<CommentWhereInput>;
  some?: Maybe<CommentWhereInput>;
  none?: Maybe<CommentWhereInput>;
};

export type CommentWhereInput = {
  id?: Maybe<StringFilter>;
  text?: Maybe<StringFilter>;
  authorId?: Maybe<StringFilter>;
  postId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<CommentWhereInput>>;
  OR?: Maybe<Array<CommentWhereInput>>;
  NOT?: Maybe<Array<CommentWhereInput>>;
  author?: Maybe<UserWhereInput>;
  post?: Maybe<PostWhereInput>;
};

export type RoomFilter = {
  every?: Maybe<RoomWhereInput>;
  some?: Maybe<RoomWhereInput>;
  none?: Maybe<RoomWhereInput>;
};

export type RoomWhereInput = {
  id?: Maybe<StringFilter>;
  participants?: Maybe<UserFilter>;
  messeges?: Maybe<MessageFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<RoomWhereInput>>;
  OR?: Maybe<Array<RoomWhereInput>>;
  NOT?: Maybe<Array<RoomWhereInput>>;
};

export type UserFilter = {
  every?: Maybe<UserWhereInput>;
  some?: Maybe<UserWhereInput>;
  none?: Maybe<UserWhereInput>;
};

export type MessageFilter = {
  every?: Maybe<MessageWhereInput>;
  some?: Maybe<MessageWhereInput>;
  none?: Maybe<MessageWhereInput>;
};

export type MessageWhereInput = {
  id?: Maybe<StringFilter>;
  senderId?: Maybe<StringFilter>;
  receiverId?: Maybe<StringFilter>;
  RoomId?: Maybe<StringFilter>;
  text?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<MessageWhereInput>>;
  OR?: Maybe<Array<MessageWhereInput>>;
  NOT?: Maybe<Array<MessageWhereInput>>;
  room?: Maybe<RoomWhereInput>;
  sender?: Maybe<UserWhereInput>;
  receiver?: Maybe<UserWhereInput>;
};

export type PostOrderByInput = {
  id?: Maybe<OrderByArg>;
  location?: Maybe<OrderByArg>;
  caption?: Maybe<OrderByArg>;
  author?: Maybe<OrderByArg>;
  authorId?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
};

export enum OrderByArg {
  Asc = 'asc',
  Desc = 'desc',
}

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['String'];
  caption: Scalars['String'];
  location?: Maybe<Scalars['String']>;
  author: User;
  authorId: Scalars['String'];
  comments: Array<Comment>;
  likes: Array<Like>;
  files: Array<File>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type PostCommentsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<CommentWhereUniqueInput>;
  before?: Maybe<CommentWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type PostLikesArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<LikeWhereUniqueInput>;
  before?: Maybe<LikeWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type PostFilesArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<FileWhereUniqueInput>;
  before?: Maybe<FileWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  bio: Scalars['String'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  followedBy: Array<User>;
  following: Array<User>;
  likes: Array<Like>;
  rooms: Array<Room>;
  posts: Array<Post>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type UserFollowedByArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<UserWhereUniqueInput>;
  before?: Maybe<UserWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type UserFollowingArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<UserWhereUniqueInput>;
  before?: Maybe<UserWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type UserLikesArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<LikeWhereUniqueInput>;
  before?: Maybe<LikeWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type UserRoomsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<RoomWhereUniqueInput>;
  before?: Maybe<RoomWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type LikeWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Like = {
  __typename?: 'Like';
  id: Scalars['String'];
  post: Post;
  postId: Scalars['String'];
  user: User;
  userId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type RoomWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Room = {
  __typename?: 'Room';
  id: Scalars['String'];
  messeges: Array<Message>;
  participants: Array<User>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type RoomMessegesArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<MessageWhereUniqueInput>;
  before?: Maybe<MessageWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type RoomParticipantsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<UserWhereUniqueInput>;
  before?: Maybe<UserWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type MessageWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Message = {
  __typename?: 'Message';
  id: Scalars['String'];
  text: Scalars['String'];
  receiver: User;
  sender: User;
  senderId: Scalars['String'];
  receiverId: Scalars['String'];
  room: Room;
  RoomId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type CommentWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['String'];
  text: Scalars['String'];
  author: User;
  authorId: Scalars['String'];
  post: Post;
  postId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type FileWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type File = {
  __typename?: 'File';
  id: Scalars['String'];
  file: Scalars['String'];
  post: Post;
  postId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create A Single post With Auther and file Connection */
  CreatePost: Post;
  /** Edit Post */
  EditPost: Post;
  /** DeLete Post */
  DeletePost: Scalars['String'];
  /** Like Or Remove Like Post */
  ToggleLikePost: Scalars['String'];
  updateOneUser?: Maybe<User>;
  deleteOneUser?: Maybe<User>;
  createUser: User;
  /** User Login Secrete Request */
  RequestLoginSecret: User;
  /** Confirm User Login Secrete */
  ConfirmSecret: Scalars['String'];
  /** Follow and unfollow User */
  FollowUnfollow: User;
  /** Clear Cookies On Logout */
  UserLogout: Scalars['String'];
  /** Create New Comment */
  CreateComment: Comment;
  /** Edit Comment */
  EditComment: Comment;
  /** Delete Comment */
  DeleteComment: Scalars['String'];
  /** Create Chat Message */
  CreateMessage?: Maybe<Message>;
};

export type MutationCreatePostArgs = {
  caption: Scalars['String'];
  location?: Maybe<Scalars['String']>;
  files?: Maybe<Array<Scalars['String']>>;
};

export type MutationEditPostArgs = {
  postId: Scalars['String'];
  caption?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  files?: Maybe<Array<Scalars['String']>>;
};

export type MutationDeletePostArgs = {
  postId: Scalars['String'];
};

export type MutationToggleLikePostArgs = {
  postId: Scalars['String'];
};

export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationCreateUserArgs = {
  username: Scalars['String'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
};

export type MutationRequestLoginSecretArgs = {
  email: Scalars['String'];
};

export type MutationConfirmSecretArgs = {
  email: Scalars['String'];
  key: Scalars['String'];
};

export type MutationFollowUnfollowArgs = {
  id?: Maybe<Scalars['String']>;
};

export type MutationCreateCommentArgs = {
  text: Scalars['String'];
  postId: Scalars['String'];
};

export type MutationEditCommentArgs = {
  text: Scalars['String'];
  commentId: Scalars['String'];
};

export type MutationDeleteCommentArgs = {
  commentId: Scalars['String'];
};

export type MutationCreateMessageArgs = {
  roomId?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  toId?: Maybe<Scalars['String']>;
};

export type UserUpdateInput = {
  id?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  loginSecret?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  likes?: Maybe<LikeUpdateManyWithoutUserInput>;
  comments?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  rooms?: Maybe<RoomUpdateManyWithoutParticipantsInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  messegesSent?: Maybe<MessageUpdateManyWithoutSenderInput>;
  messegesReceived?: Maybe<MessageUpdateManyWithoutReceiverInput>;
};

export type PostUpdateManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type PostCreateWithoutAuthorInput = {
  id?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  caption: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<FileCreateManyWithoutPostInput>;
  likes?: Maybe<LikeCreateManyWithoutPostInput>;
  comments?: Maybe<CommentCreateManyWithoutPostInput>;
};

export type FileCreateManyWithoutPostInput = {
  create?: Maybe<Array<FileCreateWithoutPostInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
};

export type FileCreateWithoutPostInput = {
  id?: Maybe<Scalars['String']>;
  file: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LikeCreateManyWithoutPostInput = {
  create?: Maybe<Array<LikeCreateWithoutPostInput>>;
  connect?: Maybe<Array<LikeWhereUniqueInput>>;
};

export type LikeCreateWithoutPostInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutLikesInput;
};

export type UserCreateOneWithoutLikesInput = {
  create?: Maybe<UserCreateWithoutLikesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutLikesInput = {
  id?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  bio: Scalars['String'];
  loginSecret?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  posts?: Maybe<PostCreateManyWithoutAuthorInput>;
  comments?: Maybe<CommentCreateManyWithoutAuthorInput>;
  rooms?: Maybe<RoomCreateManyWithoutParticipantsInput>;
  followedBy?: Maybe<UserCreateManyWithoutFollowingInput>;
  following?: Maybe<UserCreateManyWithoutFollowedByInput>;
  messegesSent?: Maybe<MessageCreateManyWithoutSenderInput>;
  messegesReceived?: Maybe<MessageCreateManyWithoutReceiverInput>;
};

export type PostCreateManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
};

export type CommentCreateManyWithoutAuthorInput = {
  create?: Maybe<Array<CommentCreateWithoutAuthorInput>>;
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
};

export type CommentCreateWithoutAuthorInput = {
  id?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  post: PostCreateOneWithoutCommentsInput;
};

export type PostCreateOneWithoutCommentsInput = {
  create?: Maybe<PostCreateWithoutCommentsInput>;
  connect?: Maybe<PostWhereUniqueInput>;
};

export type PostCreateWithoutCommentsInput = {
  id?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  caption: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  author: UserCreateOneWithoutPostsInput;
  files?: Maybe<FileCreateManyWithoutPostInput>;
  likes?: Maybe<LikeCreateManyWithoutPostInput>;
};

export type UserCreateOneWithoutPostsInput = {
  create?: Maybe<UserCreateWithoutPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutPostsInput = {
  id?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  bio: Scalars['String'];
  loginSecret?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  likes?: Maybe<LikeCreateManyWithoutUserInput>;
  comments?: Maybe<CommentCreateManyWithoutAuthorInput>;
  rooms?: Maybe<RoomCreateManyWithoutParticipantsInput>;
  followedBy?: Maybe<UserCreateManyWithoutFollowingInput>;
  following?: Maybe<UserCreateManyWithoutFollowedByInput>;
  messegesSent?: Maybe<MessageCreateManyWithoutSenderInput>;
  messegesReceived?: Maybe<MessageCreateManyWithoutReceiverInput>;
};

export type LikeCreateManyWithoutUserInput = {
  create?: Maybe<Array<LikeCreateWithoutUserInput>>;
  connect?: Maybe<Array<LikeWhereUniqueInput>>;
};

export type LikeCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  post: PostCreateOneWithoutLikesInput;
};

export type PostCreateOneWithoutLikesInput = {
  create?: Maybe<PostCreateWithoutLikesInput>;
  connect?: Maybe<PostWhereUniqueInput>;
};

export type PostCreateWithoutLikesInput = {
  id?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  caption: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  author: UserCreateOneWithoutPostsInput;
  files?: Maybe<FileCreateManyWithoutPostInput>;
  comments?: Maybe<CommentCreateManyWithoutPostInput>;
};

export type CommentCreateManyWithoutPostInput = {
  create?: Maybe<Array<CommentCreateWithoutPostInput>>;
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
};

export type CommentCreateWithoutPostInput = {
  id?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  author: UserCreateOneWithoutCommentsInput;
};

export type UserCreateOneWithoutCommentsInput = {
  create?: Maybe<UserCreateWithoutCommentsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutCommentsInput = {
  id?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  bio: Scalars['String'];
  loginSecret?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  posts?: Maybe<PostCreateManyWithoutAuthorInput>;
  likes?: Maybe<LikeCreateManyWithoutUserInput>;
  rooms?: Maybe<RoomCreateManyWithoutParticipantsInput>;
  followedBy?: Maybe<UserCreateManyWithoutFollowingInput>;
  following?: Maybe<UserCreateManyWithoutFollowedByInput>;
  messegesSent?: Maybe<MessageCreateManyWithoutSenderInput>;
  messegesReceived?: Maybe<MessageCreateManyWithoutReceiverInput>;
};

export type RoomCreateManyWithoutParticipantsInput = {
  create?: Maybe<Array<RoomCreateWithoutParticipantsInput>>;
  connect?: Maybe<Array<RoomWhereUniqueInput>>;
};

export type RoomCreateWithoutParticipantsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  messeges?: Maybe<MessageCreateManyWithoutRoomInput>;
};

export type MessageCreateManyWithoutRoomInput = {
  create?: Maybe<Array<MessageCreateWithoutRoomInput>>;
  connect?: Maybe<Array<MessageWhereUniqueInput>>;
};

export type MessageCreateWithoutRoomInput = {
  id?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  sender: UserCreateOneWithoutMessegesSentInput;
  receiver: UserCreateOneWithoutMessegesReceivedInput;
};

export type UserCreateOneWithoutMessegesSentInput = {
  create?: Maybe<UserCreateWithoutMessegesSentInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutMessegesSentInput = {
  id?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  bio: Scalars['String'];
  loginSecret?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  posts?: Maybe<PostCreateManyWithoutAuthorInput>;
  likes?: Maybe<LikeCreateManyWithoutUserInput>;
  comments?: Maybe<CommentCreateManyWithoutAuthorInput>;
  rooms?: Maybe<RoomCreateManyWithoutParticipantsInput>;
  followedBy?: Maybe<UserCreateManyWithoutFollowingInput>;
  following?: Maybe<UserCreateManyWithoutFollowedByInput>;
  messegesReceived?: Maybe<MessageCreateManyWithoutReceiverInput>;
};

export type UserCreateManyWithoutFollowingInput = {
  create?: Maybe<Array<UserCreateWithoutFollowingInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateWithoutFollowingInput = {
  id?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  bio: Scalars['String'];
  loginSecret?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  posts?: Maybe<PostCreateManyWithoutAuthorInput>;
  likes?: Maybe<LikeCreateManyWithoutUserInput>;
  comments?: Maybe<CommentCreateManyWithoutAuthorInput>;
  rooms?: Maybe<RoomCreateManyWithoutParticipantsInput>;
  followedBy?: Maybe<UserCreateManyWithoutFollowingInput>;
  messegesSent?: Maybe<MessageCreateManyWithoutSenderInput>;
  messegesReceived?: Maybe<MessageCreateManyWithoutReceiverInput>;
};

export type MessageCreateManyWithoutSenderInput = {
  create?: Maybe<Array<MessageCreateWithoutSenderInput>>;
  connect?: Maybe<Array<MessageWhereUniqueInput>>;
};

export type MessageCreateWithoutSenderInput = {
  id?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  room: RoomCreateOneWithoutMessegesInput;
  receiver: UserCreateOneWithoutMessegesReceivedInput;
};

export type RoomCreateOneWithoutMessegesInput = {
  create?: Maybe<RoomCreateWithoutMessegesInput>;
  connect?: Maybe<RoomWhereUniqueInput>;
};

export type RoomCreateWithoutMessegesInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  participants?: Maybe<UserCreateManyWithoutRoomsInput>;
};

export type UserCreateManyWithoutRoomsInput = {
  create?: Maybe<Array<UserCreateWithoutRoomsInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateWithoutRoomsInput = {
  id?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  bio: Scalars['String'];
  loginSecret?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  posts?: Maybe<PostCreateManyWithoutAuthorInput>;
  likes?: Maybe<LikeCreateManyWithoutUserInput>;
  comments?: Maybe<CommentCreateManyWithoutAuthorInput>;
  followedBy?: Maybe<UserCreateManyWithoutFollowingInput>;
  following?: Maybe<UserCreateManyWithoutFollowedByInput>;
  messegesSent?: Maybe<MessageCreateManyWithoutSenderInput>;
  messegesReceived?: Maybe<MessageCreateManyWithoutReceiverInput>;
};

export type UserCreateManyWithoutFollowedByInput = {
  create?: Maybe<Array<UserCreateWithoutFollowedByInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateWithoutFollowedByInput = {
  id?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  bio: Scalars['String'];
  loginSecret?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  posts?: Maybe<PostCreateManyWithoutAuthorInput>;
  likes?: Maybe<LikeCreateManyWithoutUserInput>;
  comments?: Maybe<CommentCreateManyWithoutAuthorInput>;
  rooms?: Maybe<RoomCreateManyWithoutParticipantsInput>;
  following?: Maybe<UserCreateManyWithoutFollowedByInput>;
  messegesSent?: Maybe<MessageCreateManyWithoutSenderInput>;
  messegesReceived?: Maybe<MessageCreateManyWithoutReceiverInput>;
};

export type MessageCreateManyWithoutReceiverInput = {
  create?: Maybe<Array<MessageCreateWithoutReceiverInput>>;
  connect?: Maybe<Array<MessageWhereUniqueInput>>;
};

export type MessageCreateWithoutReceiverInput = {
  id?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  room: RoomCreateOneWithoutMessegesInput;
  sender: UserCreateOneWithoutMessegesSentInput;
};

export type UserCreateOneWithoutMessegesReceivedInput = {
  create?: Maybe<UserCreateWithoutMessegesReceivedInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutMessegesReceivedInput = {
  id?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  bio: Scalars['String'];
  loginSecret?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  posts?: Maybe<PostCreateManyWithoutAuthorInput>;
  likes?: Maybe<LikeCreateManyWithoutUserInput>;
  comments?: Maybe<CommentCreateManyWithoutAuthorInput>;
  rooms?: Maybe<RoomCreateManyWithoutParticipantsInput>;
  followedBy?: Maybe<UserCreateManyWithoutFollowingInput>;
  following?: Maybe<UserCreateManyWithoutFollowedByInput>;
  messegesSent?: Maybe<MessageCreateManyWithoutSenderInput>;
};

export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  data: PostUpdateWithoutAuthorDataInput;
};

export type PostUpdateWithoutAuthorDataInput = {
  id?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<FileUpdateManyWithoutPostInput>;
  likes?: Maybe<LikeUpdateManyWithoutPostInput>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
};

export type FileUpdateManyWithoutPostInput = {
  create?: Maybe<Array<FileCreateWithoutPostInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
  set?: Maybe<Array<FileWhereUniqueInput>>;
  disconnect?: Maybe<Array<FileWhereUniqueInput>>;
  delete?: Maybe<Array<FileWhereUniqueInput>>;
  update?: Maybe<Array<FileUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: Maybe<Array<FileUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<FileScalarWhereInput>>;
  upsert?: Maybe<Array<FileUpsertWithWhereUniqueWithoutPostInput>>;
};

export type FileUpdateWithWhereUniqueWithoutPostInput = {
  where: FileWhereUniqueInput;
  data: FileUpdateWithoutPostDataInput;
};

export type FileUpdateWithoutPostDataInput = {
  id?: Maybe<Scalars['String']>;
  file?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FileUpdateManyWithWhereNestedInput = {
  where: FileScalarWhereInput;
  data: FileUpdateManyDataInput;
};

export type FileScalarWhereInput = {
  id?: Maybe<StringFilter>;
  file?: Maybe<StringFilter>;
  postId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<FileScalarWhereInput>>;
  OR?: Maybe<Array<FileScalarWhereInput>>;
  NOT?: Maybe<Array<FileScalarWhereInput>>;
};

export type FileUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  file?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FileUpsertWithWhereUniqueWithoutPostInput = {
  where: FileWhereUniqueInput;
  update: FileUpdateWithoutPostDataInput;
  create: FileCreateWithoutPostInput;
};

export type LikeUpdateManyWithoutPostInput = {
  create?: Maybe<Array<LikeCreateWithoutPostInput>>;
  connect?: Maybe<Array<LikeWhereUniqueInput>>;
  set?: Maybe<Array<LikeWhereUniqueInput>>;
  disconnect?: Maybe<Array<LikeWhereUniqueInput>>;
  delete?: Maybe<Array<LikeWhereUniqueInput>>;
  update?: Maybe<Array<LikeUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: Maybe<Array<LikeUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<LikeScalarWhereInput>>;
  upsert?: Maybe<Array<LikeUpsertWithWhereUniqueWithoutPostInput>>;
};

export type LikeUpdateWithWhereUniqueWithoutPostInput = {
  where: LikeWhereUniqueInput;
  data: LikeUpdateWithoutPostDataInput;
};

export type LikeUpdateWithoutPostDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutLikesInput>;
};

export type UserUpdateOneRequiredWithoutLikesInput = {
  create?: Maybe<UserCreateWithoutLikesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutLikesDataInput>;
  upsert?: Maybe<UserUpsertWithoutLikesInput>;
};

export type UserUpdateWithoutLikesDataInput = {
  id?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  loginSecret?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  comments?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  rooms?: Maybe<RoomUpdateManyWithoutParticipantsInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  messegesSent?: Maybe<MessageUpdateManyWithoutSenderInput>;
  messegesReceived?: Maybe<MessageUpdateManyWithoutReceiverInput>;
};

export type CommentUpdateManyWithoutAuthorInput = {
  create?: Maybe<Array<CommentCreateWithoutAuthorInput>>;
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
  where: CommentWhereUniqueInput;
  data: CommentUpdateWithoutAuthorDataInput;
};

export type CommentUpdateWithoutAuthorDataInput = {
  id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  post?: Maybe<PostUpdateOneRequiredWithoutCommentsInput>;
};

export type PostUpdateOneRequiredWithoutCommentsInput = {
  create?: Maybe<PostCreateWithoutCommentsInput>;
  connect?: Maybe<PostWhereUniqueInput>;
  update?: Maybe<PostUpdateWithoutCommentsDataInput>;
  upsert?: Maybe<PostUpsertWithoutCommentsInput>;
};

export type PostUpdateWithoutCommentsDataInput = {
  id?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  author?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
  files?: Maybe<FileUpdateManyWithoutPostInput>;
  likes?: Maybe<LikeUpdateManyWithoutPostInput>;
};

export type UserUpdateOneRequiredWithoutPostsInput = {
  create?: Maybe<UserCreateWithoutPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutPostsDataInput>;
  upsert?: Maybe<UserUpsertWithoutPostsInput>;
};

export type UserUpdateWithoutPostsDataInput = {
  id?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  loginSecret?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  likes?: Maybe<LikeUpdateManyWithoutUserInput>;
  comments?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  rooms?: Maybe<RoomUpdateManyWithoutParticipantsInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  messegesSent?: Maybe<MessageUpdateManyWithoutSenderInput>;
  messegesReceived?: Maybe<MessageUpdateManyWithoutReceiverInput>;
};

export type LikeUpdateManyWithoutUserInput = {
  create?: Maybe<Array<LikeCreateWithoutUserInput>>;
  connect?: Maybe<Array<LikeWhereUniqueInput>>;
  set?: Maybe<Array<LikeWhereUniqueInput>>;
  disconnect?: Maybe<Array<LikeWhereUniqueInput>>;
  delete?: Maybe<Array<LikeWhereUniqueInput>>;
  update?: Maybe<Array<LikeUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<LikeUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<LikeScalarWhereInput>>;
  upsert?: Maybe<Array<LikeUpsertWithWhereUniqueWithoutUserInput>>;
};

export type LikeUpdateWithWhereUniqueWithoutUserInput = {
  where: LikeWhereUniqueInput;
  data: LikeUpdateWithoutUserDataInput;
};

export type LikeUpdateWithoutUserDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  post?: Maybe<PostUpdateOneRequiredWithoutLikesInput>;
};

export type PostUpdateOneRequiredWithoutLikesInput = {
  create?: Maybe<PostCreateWithoutLikesInput>;
  connect?: Maybe<PostWhereUniqueInput>;
  update?: Maybe<PostUpdateWithoutLikesDataInput>;
  upsert?: Maybe<PostUpsertWithoutLikesInput>;
};

export type PostUpdateWithoutLikesDataInput = {
  id?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  author?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
  files?: Maybe<FileUpdateManyWithoutPostInput>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
};

export type CommentUpdateManyWithoutPostInput = {
  create?: Maybe<Array<CommentCreateWithoutPostInput>>;
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutPostInput>>;
};

export type CommentUpdateWithWhereUniqueWithoutPostInput = {
  where: CommentWhereUniqueInput;
  data: CommentUpdateWithoutPostDataInput;
};

export type CommentUpdateWithoutPostDataInput = {
  id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  author?: Maybe<UserUpdateOneRequiredWithoutCommentsInput>;
};

export type UserUpdateOneRequiredWithoutCommentsInput = {
  create?: Maybe<UserCreateWithoutCommentsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutCommentsDataInput>;
  upsert?: Maybe<UserUpsertWithoutCommentsInput>;
};

export type UserUpdateWithoutCommentsDataInput = {
  id?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  loginSecret?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  likes?: Maybe<LikeUpdateManyWithoutUserInput>;
  rooms?: Maybe<RoomUpdateManyWithoutParticipantsInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  messegesSent?: Maybe<MessageUpdateManyWithoutSenderInput>;
  messegesReceived?: Maybe<MessageUpdateManyWithoutReceiverInput>;
};

export type RoomUpdateManyWithoutParticipantsInput = {
  create?: Maybe<Array<RoomCreateWithoutParticipantsInput>>;
  connect?: Maybe<Array<RoomWhereUniqueInput>>;
  set?: Maybe<Array<RoomWhereUniqueInput>>;
  disconnect?: Maybe<Array<RoomWhereUniqueInput>>;
  delete?: Maybe<Array<RoomWhereUniqueInput>>;
  update?: Maybe<Array<RoomUpdateWithWhereUniqueWithoutParticipantsInput>>;
  updateMany?: Maybe<Array<RoomUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<RoomScalarWhereInput>>;
  upsert?: Maybe<Array<RoomUpsertWithWhereUniqueWithoutParticipantsInput>>;
};

export type RoomUpdateWithWhereUniqueWithoutParticipantsInput = {
  where: RoomWhereUniqueInput;
  data: RoomUpdateWithoutParticipantsDataInput;
};

export type RoomUpdateWithoutParticipantsDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  messeges?: Maybe<MessageUpdateManyWithoutRoomInput>;
};

export type MessageUpdateManyWithoutRoomInput = {
  create?: Maybe<Array<MessageCreateWithoutRoomInput>>;
  connect?: Maybe<Array<MessageWhereUniqueInput>>;
  set?: Maybe<Array<MessageWhereUniqueInput>>;
  disconnect?: Maybe<Array<MessageWhereUniqueInput>>;
  delete?: Maybe<Array<MessageWhereUniqueInput>>;
  update?: Maybe<Array<MessageUpdateWithWhereUniqueWithoutRoomInput>>;
  updateMany?: Maybe<Array<MessageUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<MessageScalarWhereInput>>;
  upsert?: Maybe<Array<MessageUpsertWithWhereUniqueWithoutRoomInput>>;
};

export type MessageUpdateWithWhereUniqueWithoutRoomInput = {
  where: MessageWhereUniqueInput;
  data: MessageUpdateWithoutRoomDataInput;
};

export type MessageUpdateWithoutRoomDataInput = {
  id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  sender?: Maybe<UserUpdateOneRequiredWithoutMessegesSentInput>;
  receiver?: Maybe<UserUpdateOneRequiredWithoutMessegesReceivedInput>;
};

export type UserUpdateOneRequiredWithoutMessegesSentInput = {
  create?: Maybe<UserCreateWithoutMessegesSentInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutMessegesSentDataInput>;
  upsert?: Maybe<UserUpsertWithoutMessegesSentInput>;
};

export type UserUpdateWithoutMessegesSentDataInput = {
  id?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  loginSecret?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  likes?: Maybe<LikeUpdateManyWithoutUserInput>;
  comments?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  rooms?: Maybe<RoomUpdateManyWithoutParticipantsInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  messegesReceived?: Maybe<MessageUpdateManyWithoutReceiverInput>;
};

export type UserUpdateManyWithoutFollowingInput = {
  create?: Maybe<Array<UserCreateWithoutFollowingInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutFollowingInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutFollowingInput>>;
};

export type UserUpdateWithWhereUniqueWithoutFollowingInput = {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutFollowingDataInput;
};

export type UserUpdateWithoutFollowingDataInput = {
  id?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  loginSecret?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  likes?: Maybe<LikeUpdateManyWithoutUserInput>;
  comments?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  rooms?: Maybe<RoomUpdateManyWithoutParticipantsInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  messegesSent?: Maybe<MessageUpdateManyWithoutSenderInput>;
  messegesReceived?: Maybe<MessageUpdateManyWithoutReceiverInput>;
};

export type MessageUpdateManyWithoutSenderInput = {
  create?: Maybe<Array<MessageCreateWithoutSenderInput>>;
  connect?: Maybe<Array<MessageWhereUniqueInput>>;
  set?: Maybe<Array<MessageWhereUniqueInput>>;
  disconnect?: Maybe<Array<MessageWhereUniqueInput>>;
  delete?: Maybe<Array<MessageWhereUniqueInput>>;
  update?: Maybe<Array<MessageUpdateWithWhereUniqueWithoutSenderInput>>;
  updateMany?: Maybe<Array<MessageUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<MessageScalarWhereInput>>;
  upsert?: Maybe<Array<MessageUpsertWithWhereUniqueWithoutSenderInput>>;
};

export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
  where: MessageWhereUniqueInput;
  data: MessageUpdateWithoutSenderDataInput;
};

export type MessageUpdateWithoutSenderDataInput = {
  id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  room?: Maybe<RoomUpdateOneRequiredWithoutMessegesInput>;
  receiver?: Maybe<UserUpdateOneRequiredWithoutMessegesReceivedInput>;
};

export type RoomUpdateOneRequiredWithoutMessegesInput = {
  create?: Maybe<RoomCreateWithoutMessegesInput>;
  connect?: Maybe<RoomWhereUniqueInput>;
  update?: Maybe<RoomUpdateWithoutMessegesDataInput>;
  upsert?: Maybe<RoomUpsertWithoutMessegesInput>;
};

export type RoomUpdateWithoutMessegesDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  participants?: Maybe<UserUpdateManyWithoutRoomsInput>;
};

export type UserUpdateManyWithoutRoomsInput = {
  create?: Maybe<Array<UserCreateWithoutRoomsInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutRoomsInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutRoomsInput>>;
};

export type UserUpdateWithWhereUniqueWithoutRoomsInput = {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutRoomsDataInput;
};

export type UserUpdateWithoutRoomsDataInput = {
  id?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  loginSecret?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  likes?: Maybe<LikeUpdateManyWithoutUserInput>;
  comments?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  messegesSent?: Maybe<MessageUpdateManyWithoutSenderInput>;
  messegesReceived?: Maybe<MessageUpdateManyWithoutReceiverInput>;
};

export type UserUpdateManyWithoutFollowedByInput = {
  create?: Maybe<Array<UserCreateWithoutFollowedByInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutFollowedByInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutFollowedByInput>>;
};

export type UserUpdateWithWhereUniqueWithoutFollowedByInput = {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutFollowedByDataInput;
};

export type UserUpdateWithoutFollowedByDataInput = {
  id?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  loginSecret?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  likes?: Maybe<LikeUpdateManyWithoutUserInput>;
  comments?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  rooms?: Maybe<RoomUpdateManyWithoutParticipantsInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  messegesSent?: Maybe<MessageUpdateManyWithoutSenderInput>;
  messegesReceived?: Maybe<MessageUpdateManyWithoutReceiverInput>;
};

export type MessageUpdateManyWithoutReceiverInput = {
  create?: Maybe<Array<MessageCreateWithoutReceiverInput>>;
  connect?: Maybe<Array<MessageWhereUniqueInput>>;
  set?: Maybe<Array<MessageWhereUniqueInput>>;
  disconnect?: Maybe<Array<MessageWhereUniqueInput>>;
  delete?: Maybe<Array<MessageWhereUniqueInput>>;
  update?: Maybe<Array<MessageUpdateWithWhereUniqueWithoutReceiverInput>>;
  updateMany?: Maybe<Array<MessageUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<MessageScalarWhereInput>>;
  upsert?: Maybe<Array<MessageUpsertWithWhereUniqueWithoutReceiverInput>>;
};

export type MessageUpdateWithWhereUniqueWithoutReceiverInput = {
  where: MessageWhereUniqueInput;
  data: MessageUpdateWithoutReceiverDataInput;
};

export type MessageUpdateWithoutReceiverDataInput = {
  id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  room?: Maybe<RoomUpdateOneRequiredWithoutMessegesInput>;
  sender?: Maybe<UserUpdateOneRequiredWithoutMessegesSentInput>;
};

export type MessageUpdateManyWithWhereNestedInput = {
  where: MessageScalarWhereInput;
  data: MessageUpdateManyDataInput;
};

export type MessageScalarWhereInput = {
  id?: Maybe<StringFilter>;
  senderId?: Maybe<StringFilter>;
  receiverId?: Maybe<StringFilter>;
  RoomId?: Maybe<StringFilter>;
  text?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<MessageScalarWhereInput>>;
  OR?: Maybe<Array<MessageScalarWhereInput>>;
  NOT?: Maybe<Array<MessageScalarWhereInput>>;
};

export type MessageUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MessageUpsertWithWhereUniqueWithoutReceiverInput = {
  where: MessageWhereUniqueInput;
  update: MessageUpdateWithoutReceiverDataInput;
  create: MessageCreateWithoutReceiverInput;
};

export type UserUpdateManyWithWhereNestedInput = {
  where: UserScalarWhereInput;
  data: UserUpdateManyDataInput;
};

export type UserScalarWhereInput = {
  id?: Maybe<StringFilter>;
  avatar?: Maybe<NullableStringFilter>;
  username?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  firstName?: Maybe<NullableStringFilter>;
  lastName?: Maybe<NullableStringFilter>;
  fullName?: Maybe<NullableStringFilter>;
  bio?: Maybe<StringFilter>;
  loginSecret?: Maybe<NullableStringFilter>;
  posts?: Maybe<PostFilter>;
  likes?: Maybe<LikeFilter>;
  comments?: Maybe<CommentFilter>;
  rooms?: Maybe<RoomFilter>;
  followedBy?: Maybe<UserFilter>;
  following?: Maybe<UserFilter>;
  messegesSent?: Maybe<MessageFilter>;
  messegesReceived?: Maybe<MessageFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<UserScalarWhereInput>>;
  OR?: Maybe<Array<UserScalarWhereInput>>;
  NOT?: Maybe<Array<UserScalarWhereInput>>;
};

export type UserUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  loginSecret?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserUpsertWithWhereUniqueWithoutFollowedByInput = {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutFollowedByDataInput;
  create: UserCreateWithoutFollowedByInput;
};

export type UserUpsertWithWhereUniqueWithoutRoomsInput = {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutRoomsDataInput;
  create: UserCreateWithoutRoomsInput;
};

export type RoomUpsertWithoutMessegesInput = {
  update: RoomUpdateWithoutMessegesDataInput;
  create: RoomCreateWithoutMessegesInput;
};

export type UserUpdateOneRequiredWithoutMessegesReceivedInput = {
  create?: Maybe<UserCreateWithoutMessegesReceivedInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutMessegesReceivedDataInput>;
  upsert?: Maybe<UserUpsertWithoutMessegesReceivedInput>;
};

export type UserUpdateWithoutMessegesReceivedDataInput = {
  id?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  loginSecret?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  likes?: Maybe<LikeUpdateManyWithoutUserInput>;
  comments?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  rooms?: Maybe<RoomUpdateManyWithoutParticipantsInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  messegesSent?: Maybe<MessageUpdateManyWithoutSenderInput>;
};

export type UserUpsertWithoutMessegesReceivedInput = {
  update: UserUpdateWithoutMessegesReceivedDataInput;
  create: UserCreateWithoutMessegesReceivedInput;
};

export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
  where: MessageWhereUniqueInput;
  update: MessageUpdateWithoutSenderDataInput;
  create: MessageCreateWithoutSenderInput;
};

export type UserUpsertWithWhereUniqueWithoutFollowingInput = {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutFollowingDataInput;
  create: UserCreateWithoutFollowingInput;
};

export type UserUpsertWithoutMessegesSentInput = {
  update: UserUpdateWithoutMessegesSentDataInput;
  create: UserCreateWithoutMessegesSentInput;
};

export type MessageUpsertWithWhereUniqueWithoutRoomInput = {
  where: MessageWhereUniqueInput;
  update: MessageUpdateWithoutRoomDataInput;
  create: MessageCreateWithoutRoomInput;
};

export type RoomUpdateManyWithWhereNestedInput = {
  where: RoomScalarWhereInput;
  data: RoomUpdateManyDataInput;
};

export type RoomScalarWhereInput = {
  id?: Maybe<StringFilter>;
  participants?: Maybe<UserFilter>;
  messeges?: Maybe<MessageFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<RoomScalarWhereInput>>;
  OR?: Maybe<Array<RoomScalarWhereInput>>;
  NOT?: Maybe<Array<RoomScalarWhereInput>>;
};

export type RoomUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RoomUpsertWithWhereUniqueWithoutParticipantsInput = {
  where: RoomWhereUniqueInput;
  update: RoomUpdateWithoutParticipantsDataInput;
  create: RoomCreateWithoutParticipantsInput;
};

export type UserUpsertWithoutCommentsInput = {
  update: UserUpdateWithoutCommentsDataInput;
  create: UserCreateWithoutCommentsInput;
};

export type CommentUpdateManyWithWhereNestedInput = {
  where: CommentScalarWhereInput;
  data: CommentUpdateManyDataInput;
};

export type CommentScalarWhereInput = {
  id?: Maybe<StringFilter>;
  text?: Maybe<StringFilter>;
  authorId?: Maybe<StringFilter>;
  postId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<CommentScalarWhereInput>>;
  OR?: Maybe<Array<CommentScalarWhereInput>>;
  NOT?: Maybe<Array<CommentScalarWhereInput>>;
};

export type CommentUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentUpsertWithWhereUniqueWithoutPostInput = {
  where: CommentWhereUniqueInput;
  update: CommentUpdateWithoutPostDataInput;
  create: CommentCreateWithoutPostInput;
};

export type PostUpsertWithoutLikesInput = {
  update: PostUpdateWithoutLikesDataInput;
  create: PostCreateWithoutLikesInput;
};

export type LikeUpdateManyWithWhereNestedInput = {
  where: LikeScalarWhereInput;
  data: LikeUpdateManyDataInput;
};

export type LikeScalarWhereInput = {
  id?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
  postId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<LikeScalarWhereInput>>;
  OR?: Maybe<Array<LikeScalarWhereInput>>;
  NOT?: Maybe<Array<LikeScalarWhereInput>>;
};

export type LikeUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LikeUpsertWithWhereUniqueWithoutUserInput = {
  where: LikeWhereUniqueInput;
  update: LikeUpdateWithoutUserDataInput;
  create: LikeCreateWithoutUserInput;
};

export type UserUpsertWithoutPostsInput = {
  update: UserUpdateWithoutPostsDataInput;
  create: UserCreateWithoutPostsInput;
};

export type PostUpsertWithoutCommentsInput = {
  update: PostUpdateWithoutCommentsDataInput;
  create: PostCreateWithoutCommentsInput;
};

export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
  where: CommentWhereUniqueInput;
  update: CommentUpdateWithoutAuthorDataInput;
  create: CommentCreateWithoutAuthorInput;
};

export type UserUpsertWithoutLikesInput = {
  update: UserUpdateWithoutLikesDataInput;
  create: UserCreateWithoutLikesInput;
};

export type LikeUpsertWithWhereUniqueWithoutPostInput = {
  where: LikeWhereUniqueInput;
  update: LikeUpdateWithoutPostDataInput;
  create: LikeCreateWithoutPostInput;
};

export type PostUpdateManyWithWhereNestedInput = {
  where: PostScalarWhereInput;
  data: PostUpdateManyDataInput;
};

export type PostScalarWhereInput = {
  id?: Maybe<StringFilter>;
  location?: Maybe<NullableStringFilter>;
  caption?: Maybe<StringFilter>;
  authorId?: Maybe<StringFilter>;
  files?: Maybe<FileFilter>;
  likes?: Maybe<LikeFilter>;
  comments?: Maybe<CommentFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<PostScalarWhereInput>>;
  OR?: Maybe<Array<PostScalarWhereInput>>;
  NOT?: Maybe<Array<PostScalarWhereInput>>;
};

export type PostUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  update: PostUpdateWithoutAuthorDataInput;
  create: PostCreateWithoutAuthorInput;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** New Message Subscriptions */
  NewMessage: Message;
};

export type SubscriptionNewMessageArgs = {
  ROOMID: Scalars['String'];
};

export type MeQueryVariables = {};

export type MeQuery = { __typename?: 'Query' } & {
  CurrentUser?: Maybe<
    { __typename?: 'User' } & Pick<
      User,
      | 'id'
      | 'email'
      | 'firstName'
      | 'lastName'
      | 'fullName'
      | 'avatar'
      | 'bio'
      | 'username'
    > & {
        likes: Array<{ __typename?: 'Like' } & Pick<Like, 'id'>>;
        posts: Array<{ __typename?: 'Post' } & Pick<Post, 'id' | 'caption'>>;
        followedBy: Array<{ __typename?: 'User' } & Pick<User, 'id'>>;
        following: Array<{ __typename?: 'User' } & Pick<User, 'id'>>;
      }
  >;
};

export type Confirm_Login_ScreteMutationVariables = {
  email: Scalars['String'];
  key: Scalars['String'];
};

export type Confirm_Login_ScreteMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'ConfirmSecret'
>;

export type Request_Login_ScreteMutationVariables = {
  email: Scalars['String'];
};

export type Request_Login_ScreteMutation = { __typename?: 'Mutation' } & {
  RequestLoginSecret: { __typename?: 'User' } & Pick<User, 'email'>;
};

export type User_Signup_MutationMutationVariables = {
  username: Scalars['String'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
};

export type User_Signup_MutationMutation = { __typename?: 'Mutation' } & {
  createUser: { __typename?: 'User' } & Pick<User, 'id' | 'email' | 'fullName'>;
};

export type Search_Post_QueryQueryVariables = {
  term: Scalars['String'];
};

export type Search_Post_QueryQuery = { __typename?: 'Query' } & {
  SearchPost?: Maybe<
    Array<
      { __typename?: 'Post' } & Pick<
        Post,
        'id' | 'caption' | 'location' | 'authorId'
      >
    >
  >;
};

export type Feeds_QueryQueryVariables = {};

export type Feeds_QueryQuery = { __typename?: 'Query' } & {
  Feeds: Array<
    { __typename?: 'Post' } & Pick<
      Post,
      'id' | 'caption' | 'location' | 'authorId' | 'createdAt' | 'updatedAt'
    > & {
        comments: Array<{ __typename?: 'Comment' } & Pick<Comment, 'id'>>;
        author: { __typename?: 'User' } & Pick<
          User,
          'id' | 'email' | 'username'
        >;
        likes: Array<
          { __typename?: 'Like' } & Pick<Like, 'id'> & {
              user: { __typename?: 'User' } & Pick<User, 'id' | 'username'>;
            }
        >;
        files: Array<{ __typename?: 'File' } & Pick<File, 'id' | 'file'>>;
      }
  >;
};

export type Toggle_Like_MutationMutationVariables = {
  postId: Scalars['String'];
};

export type Toggle_Like_MutationMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'ToggleLikePost'
>;

export type Comment_MutationMutationVariables = {
  text: Scalars['String'];
  postId: Scalars['String'];
};

export type Comment_MutationMutation = { __typename?: 'Mutation' } & {
  CreateComment: { __typename?: 'Comment' } & Pick<Comment, 'id' | 'text'>;
};

export type Comments_For_Post_QueryQueryVariables = {
  postId: Scalars['String'];
};

export type Comments_For_Post_QueryQuery = { __typename?: 'Query' } & {
  Comments?: Maybe<
    Array<
      { __typename?: 'Comment' } & Pick<Comment, 'id' | 'text'> & {
          author: { __typename?: 'User' } & Pick<User, 'username'>;
          post: { __typename?: 'Post' } & Pick<Post, 'caption'>;
        }
    >
  >;
};

export const MeDocument = gql`
  query Me {
    CurrentUser {
      id
      email
      firstName
      lastName
      fullName
      avatar
      bio
      username
      likes {
        id
      }
      posts {
        id
        caption
      }
      followedBy {
        id
      }
      following {
        id
      }
      posts {
        caption
      }
    }
  }
`;
export type MeComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<MeQuery, MeQueryVariables>,
  'query'
>;

export const MeComponent = (props: MeComponentProps) => (
  <ApolloReactComponents.Query<MeQuery, MeQueryVariables>
    query={MeDocument}
    {...props}
  />
);

export type MeProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<MeQuery, MeQueryVariables>;
} &
  TChildProps;
export function withMe<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    MeQuery,
    MeQueryVariables,
    MeProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withQuery<
    TProps,
    MeQuery,
    MeQueryVariables,
    MeProps<TChildProps, TDataName>
  >(MeDocument, {
    alias: 'me',
    ...operationOptions,
  });
}

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>,
) {
  return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(
    MeDocument,
    baseOptions,
  );
}
export function useMeLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    MeQuery,
    MeQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(
    MeDocument,
    baseOptions,
  );
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<
  MeQuery,
  MeQueryVariables
>;
export const Confirm_Login_ScreteDocument = gql`
  mutation CONFIRM_LOGIN_SCRETE($email: String!, $key: String!) {
    ConfirmSecret(email: $email, key: $key)
  }
`;
export type Confirm_Login_ScreteMutationFn = ApolloReactCommon.MutationFunction<
  Confirm_Login_ScreteMutation,
  Confirm_Login_ScreteMutationVariables
>;
export type Confirm_Login_ScreteComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    Confirm_Login_ScreteMutation,
    Confirm_Login_ScreteMutationVariables
  >,
  'mutation'
>;

export const Confirm_Login_ScreteComponent = (
  props: Confirm_Login_ScreteComponentProps,
) => (
  <ApolloReactComponents.Mutation<
    Confirm_Login_ScreteMutation,
    Confirm_Login_ScreteMutationVariables
  >
    mutation={Confirm_Login_ScreteDocument}
    {...props}
  />
);

export type Confirm_Login_ScreteProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<
    Confirm_Login_ScreteMutation,
    Confirm_Login_ScreteMutationVariables
  >;
} &
  TChildProps;
export function withConfirm_Login_Screte<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    Confirm_Login_ScreteMutation,
    Confirm_Login_ScreteMutationVariables,
    Confirm_Login_ScreteProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withMutation<
    TProps,
    Confirm_Login_ScreteMutation,
    Confirm_Login_ScreteMutationVariables,
    Confirm_Login_ScreteProps<TChildProps, TDataName>
  >(Confirm_Login_ScreteDocument, {
    alias: 'confirmLoginScrete',
    ...operationOptions,
  });
}

/**
 * __useConfirm_Login_ScreteMutation__
 *
 * To run a mutation, you first call `useConfirm_Login_ScreteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirm_Login_ScreteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmLoginScreteMutation, { data, loading, error }] = useConfirm_Login_ScreteMutation({
 *   variables: {
 *      email: // value for 'email'
 *      key: // value for 'key'
 *   },
 * });
 */
export function useConfirm_Login_ScreteMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    Confirm_Login_ScreteMutation,
    Confirm_Login_ScreteMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    Confirm_Login_ScreteMutation,
    Confirm_Login_ScreteMutationVariables
  >(Confirm_Login_ScreteDocument, baseOptions);
}
export type Confirm_Login_ScreteMutationHookResult = ReturnType<
  typeof useConfirm_Login_ScreteMutation
>;
export type Confirm_Login_ScreteMutationResult = ApolloReactCommon.MutationResult<
  Confirm_Login_ScreteMutation
>;
export type Confirm_Login_ScreteMutationOptions = ApolloReactCommon.BaseMutationOptions<
  Confirm_Login_ScreteMutation,
  Confirm_Login_ScreteMutationVariables
>;
export const Request_Login_ScreteDocument = gql`
  mutation REQUEST_LOGIN_SCRETE($email: String!) {
    RequestLoginSecret(email: $email) {
      email
    }
  }
`;
export type Request_Login_ScreteMutationFn = ApolloReactCommon.MutationFunction<
  Request_Login_ScreteMutation,
  Request_Login_ScreteMutationVariables
>;
export type Request_Login_ScreteComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    Request_Login_ScreteMutation,
    Request_Login_ScreteMutationVariables
  >,
  'mutation'
>;

export const Request_Login_ScreteComponent = (
  props: Request_Login_ScreteComponentProps,
) => (
  <ApolloReactComponents.Mutation<
    Request_Login_ScreteMutation,
    Request_Login_ScreteMutationVariables
  >
    mutation={Request_Login_ScreteDocument}
    {...props}
  />
);

export type Request_Login_ScreteProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<
    Request_Login_ScreteMutation,
    Request_Login_ScreteMutationVariables
  >;
} &
  TChildProps;
export function withRequest_Login_Screte<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    Request_Login_ScreteMutation,
    Request_Login_ScreteMutationVariables,
    Request_Login_ScreteProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withMutation<
    TProps,
    Request_Login_ScreteMutation,
    Request_Login_ScreteMutationVariables,
    Request_Login_ScreteProps<TChildProps, TDataName>
  >(Request_Login_ScreteDocument, {
    alias: 'requestLoginScrete',
    ...operationOptions,
  });
}

/**
 * __useRequest_Login_ScreteMutation__
 *
 * To run a mutation, you first call `useRequest_Login_ScreteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequest_Login_ScreteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestLoginScreteMutation, { data, loading, error }] = useRequest_Login_ScreteMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRequest_Login_ScreteMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    Request_Login_ScreteMutation,
    Request_Login_ScreteMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    Request_Login_ScreteMutation,
    Request_Login_ScreteMutationVariables
  >(Request_Login_ScreteDocument, baseOptions);
}
export type Request_Login_ScreteMutationHookResult = ReturnType<
  typeof useRequest_Login_ScreteMutation
>;
export type Request_Login_ScreteMutationResult = ApolloReactCommon.MutationResult<
  Request_Login_ScreteMutation
>;
export type Request_Login_ScreteMutationOptions = ApolloReactCommon.BaseMutationOptions<
  Request_Login_ScreteMutation,
  Request_Login_ScreteMutationVariables
>;
export const User_Signup_MutationDocument = gql`
  mutation USER_SIGNUP_MUTATION(
    $username: String!
    $email: String!
    $firstName: String
    $lastName: String
    $avatar: String
    $bio: String
  ) {
    createUser(
      username: $username
      email: $email
      firstName: $firstName
      lastName: $lastName
      avatar: $avatar
      bio: $bio
    ) {
      id
      email
      fullName
      email
    }
  }
`;
export type User_Signup_MutationMutationFn = ApolloReactCommon.MutationFunction<
  User_Signup_MutationMutation,
  User_Signup_MutationMutationVariables
>;
export type User_Signup_MutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    User_Signup_MutationMutation,
    User_Signup_MutationMutationVariables
  >,
  'mutation'
>;

export const User_Signup_MutationComponent = (
  props: User_Signup_MutationComponentProps,
) => (
  <ApolloReactComponents.Mutation<
    User_Signup_MutationMutation,
    User_Signup_MutationMutationVariables
  >
    mutation={User_Signup_MutationDocument}
    {...props}
  />
);

export type User_Signup_MutationProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<
    User_Signup_MutationMutation,
    User_Signup_MutationMutationVariables
  >;
} &
  TChildProps;
export function withUser_Signup_Mutation<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    User_Signup_MutationMutation,
    User_Signup_MutationMutationVariables,
    User_Signup_MutationProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withMutation<
    TProps,
    User_Signup_MutationMutation,
    User_Signup_MutationMutationVariables,
    User_Signup_MutationProps<TChildProps, TDataName>
  >(User_Signup_MutationDocument, {
    alias: 'userSignupMutation',
    ...operationOptions,
  });
}

/**
 * __useUser_Signup_MutationMutation__
 *
 * To run a mutation, you first call `useUser_Signup_MutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUser_Signup_MutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userSignupMutationMutation, { data, loading, error }] = useUser_Signup_MutationMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      avatar: // value for 'avatar'
 *      bio: // value for 'bio'
 *   },
 * });
 */
export function useUser_Signup_MutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    User_Signup_MutationMutation,
    User_Signup_MutationMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    User_Signup_MutationMutation,
    User_Signup_MutationMutationVariables
  >(User_Signup_MutationDocument, baseOptions);
}
export type User_Signup_MutationMutationHookResult = ReturnType<
  typeof useUser_Signup_MutationMutation
>;
export type User_Signup_MutationMutationResult = ApolloReactCommon.MutationResult<
  User_Signup_MutationMutation
>;
export type User_Signup_MutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  User_Signup_MutationMutation,
  User_Signup_MutationMutationVariables
>;
export const Search_Post_QueryDocument = gql`
  query SEARCH_POST_QUERY($term: String!) {
    SearchPost(term: $term) {
      id
      caption
      location
      authorId
    }
  }
`;
export type Search_Post_QueryComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    Search_Post_QueryQuery,
    Search_Post_QueryQueryVariables
  >,
  'query'
> &
  (
    | { variables: Search_Post_QueryQueryVariables; skip?: boolean }
    | { skip: boolean }
  );

export const Search_Post_QueryComponent = (
  props: Search_Post_QueryComponentProps,
) => (
  <ApolloReactComponents.Query<
    Search_Post_QueryQuery,
    Search_Post_QueryQueryVariables
  >
    query={Search_Post_QueryDocument}
    {...props}
  />
);

export type Search_Post_QueryProps<
  TChildProps = {},
  TDataName extends string = 'data'
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    Search_Post_QueryQuery,
    Search_Post_QueryQueryVariables
  >;
} &
  TChildProps;
export function withSearch_Post_Query<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    Search_Post_QueryQuery,
    Search_Post_QueryQueryVariables,
    Search_Post_QueryProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withQuery<
    TProps,
    Search_Post_QueryQuery,
    Search_Post_QueryQueryVariables,
    Search_Post_QueryProps<TChildProps, TDataName>
  >(Search_Post_QueryDocument, {
    alias: 'searchPostQuery',
    ...operationOptions,
  });
}

/**
 * __useSearch_Post_QueryQuery__
 *
 * To run a query within a React component, call `useSearch_Post_QueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearch_Post_QueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearch_Post_QueryQuery({
 *   variables: {
 *      term: // value for 'term'
 *   },
 * });
 */
export function useSearch_Post_QueryQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    Search_Post_QueryQuery,
    Search_Post_QueryQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    Search_Post_QueryQuery,
    Search_Post_QueryQueryVariables
  >(Search_Post_QueryDocument, baseOptions);
}
export function useSearch_Post_QueryLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    Search_Post_QueryQuery,
    Search_Post_QueryQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    Search_Post_QueryQuery,
    Search_Post_QueryQueryVariables
  >(Search_Post_QueryDocument, baseOptions);
}
export type Search_Post_QueryQueryHookResult = ReturnType<
  typeof useSearch_Post_QueryQuery
>;
export type Search_Post_QueryLazyQueryHookResult = ReturnType<
  typeof useSearch_Post_QueryLazyQuery
>;
export type Search_Post_QueryQueryResult = ApolloReactCommon.QueryResult<
  Search_Post_QueryQuery,
  Search_Post_QueryQueryVariables
>;
export const Feeds_QueryDocument = gql`
  query FEEDS_QUERY {
    Feeds {
      id
      caption
      location
      authorId
      comments {
        id
      }
      author {
        id
        email
        username
      }
      likes {
        id
        user {
          id
          username
        }
      }
      files {
        id
        file
      }
      createdAt
      updatedAt
    }
  }
`;
export type Feeds_QueryComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    Feeds_QueryQuery,
    Feeds_QueryQueryVariables
  >,
  'query'
>;

export const Feeds_QueryComponent = (props: Feeds_QueryComponentProps) => (
  <ApolloReactComponents.Query<Feeds_QueryQuery, Feeds_QueryQueryVariables>
    query={Feeds_QueryDocument}
    {...props}
  />
);

export type Feeds_QueryProps<
  TChildProps = {},
  TDataName extends string = 'data'
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    Feeds_QueryQuery,
    Feeds_QueryQueryVariables
  >;
} &
  TChildProps;
export function withFeeds_Query<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    Feeds_QueryQuery,
    Feeds_QueryQueryVariables,
    Feeds_QueryProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withQuery<
    TProps,
    Feeds_QueryQuery,
    Feeds_QueryQueryVariables,
    Feeds_QueryProps<TChildProps, TDataName>
  >(Feeds_QueryDocument, {
    alias: 'feedsQuery',
    ...operationOptions,
  });
}

/**
 * __useFeeds_QueryQuery__
 *
 * To run a query within a React component, call `useFeeds_QueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeeds_QueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeeds_QueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useFeeds_QueryQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    Feeds_QueryQuery,
    Feeds_QueryQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<Feeds_QueryQuery, Feeds_QueryQueryVariables>(
    Feeds_QueryDocument,
    baseOptions,
  );
}
export function useFeeds_QueryLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    Feeds_QueryQuery,
    Feeds_QueryQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    Feeds_QueryQuery,
    Feeds_QueryQueryVariables
  >(Feeds_QueryDocument, baseOptions);
}
export type Feeds_QueryQueryHookResult = ReturnType<typeof useFeeds_QueryQuery>;
export type Feeds_QueryLazyQueryHookResult = ReturnType<
  typeof useFeeds_QueryLazyQuery
>;
export type Feeds_QueryQueryResult = ApolloReactCommon.QueryResult<
  Feeds_QueryQuery,
  Feeds_QueryQueryVariables
>;
export const Toggle_Like_MutationDocument = gql`
  mutation TOGGLE_LIKE_MUTATION($postId: String!) {
    ToggleLikePost(postId: $postId)
  }
`;
export type Toggle_Like_MutationMutationFn = ApolloReactCommon.MutationFunction<
  Toggle_Like_MutationMutation,
  Toggle_Like_MutationMutationVariables
>;
export type Toggle_Like_MutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    Toggle_Like_MutationMutation,
    Toggle_Like_MutationMutationVariables
  >,
  'mutation'
>;

export const Toggle_Like_MutationComponent = (
  props: Toggle_Like_MutationComponentProps,
) => (
  <ApolloReactComponents.Mutation<
    Toggle_Like_MutationMutation,
    Toggle_Like_MutationMutationVariables
  >
    mutation={Toggle_Like_MutationDocument}
    {...props}
  />
);

export type Toggle_Like_MutationProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<
    Toggle_Like_MutationMutation,
    Toggle_Like_MutationMutationVariables
  >;
} &
  TChildProps;
export function withToggle_Like_Mutation<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    Toggle_Like_MutationMutation,
    Toggle_Like_MutationMutationVariables,
    Toggle_Like_MutationProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withMutation<
    TProps,
    Toggle_Like_MutationMutation,
    Toggle_Like_MutationMutationVariables,
    Toggle_Like_MutationProps<TChildProps, TDataName>
  >(Toggle_Like_MutationDocument, {
    alias: 'toggleLikeMutation',
    ...operationOptions,
  });
}

/**
 * __useToggle_Like_MutationMutation__
 *
 * To run a mutation, you first call `useToggle_Like_MutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggle_Like_MutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleLikeMutationMutation, { data, loading, error }] = useToggle_Like_MutationMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useToggle_Like_MutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    Toggle_Like_MutationMutation,
    Toggle_Like_MutationMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    Toggle_Like_MutationMutation,
    Toggle_Like_MutationMutationVariables
  >(Toggle_Like_MutationDocument, baseOptions);
}
export type Toggle_Like_MutationMutationHookResult = ReturnType<
  typeof useToggle_Like_MutationMutation
>;
export type Toggle_Like_MutationMutationResult = ApolloReactCommon.MutationResult<
  Toggle_Like_MutationMutation
>;
export type Toggle_Like_MutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  Toggle_Like_MutationMutation,
  Toggle_Like_MutationMutationVariables
>;
export const Comment_MutationDocument = gql`
  mutation COMMENT_MUTATION($text: String!, $postId: String!) {
    CreateComment(text: $text, postId: $postId) {
      id
      text
    }
  }
`;
export type Comment_MutationMutationFn = ApolloReactCommon.MutationFunction<
  Comment_MutationMutation,
  Comment_MutationMutationVariables
>;
export type Comment_MutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    Comment_MutationMutation,
    Comment_MutationMutationVariables
  >,
  'mutation'
>;

export const Comment_MutationComponent = (
  props: Comment_MutationComponentProps,
) => (
  <ApolloReactComponents.Mutation<
    Comment_MutationMutation,
    Comment_MutationMutationVariables
  >
    mutation={Comment_MutationDocument}
    {...props}
  />
);

export type Comment_MutationProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<
    Comment_MutationMutation,
    Comment_MutationMutationVariables
  >;
} &
  TChildProps;
export function withComment_Mutation<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    Comment_MutationMutation,
    Comment_MutationMutationVariables,
    Comment_MutationProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withMutation<
    TProps,
    Comment_MutationMutation,
    Comment_MutationMutationVariables,
    Comment_MutationProps<TChildProps, TDataName>
  >(Comment_MutationDocument, {
    alias: 'commentMutation',
    ...operationOptions,
  });
}

/**
 * __useComment_MutationMutation__
 *
 * To run a mutation, you first call `useComment_MutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useComment_MutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [commentMutationMutation, { data, loading, error }] = useComment_MutationMutation({
 *   variables: {
 *      text: // value for 'text'
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useComment_MutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    Comment_MutationMutation,
    Comment_MutationMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    Comment_MutationMutation,
    Comment_MutationMutationVariables
  >(Comment_MutationDocument, baseOptions);
}
export type Comment_MutationMutationHookResult = ReturnType<
  typeof useComment_MutationMutation
>;
export type Comment_MutationMutationResult = ApolloReactCommon.MutationResult<
  Comment_MutationMutation
>;
export type Comment_MutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  Comment_MutationMutation,
  Comment_MutationMutationVariables
>;
export const Comments_For_Post_QueryDocument = gql`
  query COMMENTS_FOR_POST_QUERY($postId: String!) {
    Comments(postId: $postId) {
      id
      text
      author {
        username
      }
      post {
        caption
      }
    }
  }
`;
export type Comments_For_Post_QueryComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    Comments_For_Post_QueryQuery,
    Comments_For_Post_QueryQueryVariables
  >,
  'query'
> &
  (
    | { variables: Comments_For_Post_QueryQueryVariables; skip?: boolean }
    | { skip: boolean }
  );

export const Comments_For_Post_QueryComponent = (
  props: Comments_For_Post_QueryComponentProps,
) => (
  <ApolloReactComponents.Query<
    Comments_For_Post_QueryQuery,
    Comments_For_Post_QueryQueryVariables
  >
    query={Comments_For_Post_QueryDocument}
    {...props}
  />
);

export type Comments_For_Post_QueryProps<
  TChildProps = {},
  TDataName extends string = 'data'
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    Comments_For_Post_QueryQuery,
    Comments_For_Post_QueryQueryVariables
  >;
} &
  TChildProps;
export function withComments_For_Post_Query<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    Comments_For_Post_QueryQuery,
    Comments_For_Post_QueryQueryVariables,
    Comments_For_Post_QueryProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withQuery<
    TProps,
    Comments_For_Post_QueryQuery,
    Comments_For_Post_QueryQueryVariables,
    Comments_For_Post_QueryProps<TChildProps, TDataName>
  >(Comments_For_Post_QueryDocument, {
    alias: 'commentsForPostQuery',
    ...operationOptions,
  });
}

/**
 * __useComments_For_Post_QueryQuery__
 *
 * To run a query within a React component, call `useComments_For_Post_QueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useComments_For_Post_QueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useComments_For_Post_QueryQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useComments_For_Post_QueryQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    Comments_For_Post_QueryQuery,
    Comments_For_Post_QueryQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    Comments_For_Post_QueryQuery,
    Comments_For_Post_QueryQueryVariables
  >(Comments_For_Post_QueryDocument, baseOptions);
}
export function useComments_For_Post_QueryLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    Comments_For_Post_QueryQuery,
    Comments_For_Post_QueryQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    Comments_For_Post_QueryQuery,
    Comments_For_Post_QueryQueryVariables
  >(Comments_For_Post_QueryDocument, baseOptions);
}
export type Comments_For_Post_QueryQueryHookResult = ReturnType<
  typeof useComments_For_Post_QueryQuery
>;
export type Comments_For_Post_QueryLazyQueryHookResult = ReturnType<
  typeof useComments_For_Post_QueryLazyQuery
>;
export type Comments_For_Post_QueryQueryResult = ApolloReactCommon.QueryResult<
  Comments_For_Post_QueryQuery,
  Comments_For_Post_QueryQueryVariables
>;

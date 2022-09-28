import React, { FC, useState } from 'react';
import { Box, Button, IconButton, Stack, TextField, Typography } from '@mui/material';
import { IPost } from '../../interfaces';
import { useDispatch } from 'react-redux';
import { addComment, addLikeCount } from '../../redux/actions/post.action';

interface IPostProps {
  post: IPost;
}

export const Post: FC<IPostProps> = ({
  post,
}) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState<string>('');

  const handleClickLike = (id: number) => {
    dispatch(addLikeCount(id));
  };

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleAddComment = (id) => {
    dispatch(addComment(id, {  comment: comment, date: new Date().toLocaleDateString() }));
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6">{ post?.title }</Typography>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" display="flex" alignItems="center">
            <Typography variant="body1" >{post?.like}</Typography>
            <IconButton onClick={() => handleClickLike(post.id)}>
              <img style={{ width: 16, height: 16 }} src="/assets/like.png" />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>

      <Typography sx={{ mt: 2, mb: 4 }}>
        { post?.description }
      </Typography>

      <TextField
        value={comment}
        variant="outlined"
        sx={{ width: '100%', mb: 1 }}
        multiline
        minRows={2}
        onChange={handleChange}
      />

      <Box mb={4} sx={{ display: 'flex' }}>
        <Button sx={{  ml: 'auto' }} onClick={() => handleAddComment(post.id)}>
          Add comment
        </Button>
      </Box>

      {
        post && post?.comments.map((itemComment) => (
          <Box>
            <Typography>{itemComment.comment}</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Typography align="right" variant="caption">{itemComment.date}</Typography>
            </Box>
          </Box>
        ))
      }
    </Box>
  )
};

import React, { FC, useEffect, useMemo, useState } from 'react';
import { Box, Button, Container, Divider, Stack, Tabs, Tab, Paper, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { classes, Root } from './style';
import { RootState } from '../../redux/reducers';
import { Post } from '../../components/Post';
import { POSTS } from '../../redux/constants';
import { getPosts } from '../../redux/actions/post.action';

export const Home: FC = () => {
  const dispatch = useDispatch();
  const [tab, setTab] = useState(0);

  const posts = useSelector(
    ({ postReducer: { posts } }: RootState) => posts
  );

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const totalLikeCount = useMemo(() => {
    return posts.reduce((total, post) => total + post.like, 0)
  }, [posts]);

  const totalCommentsCount = useMemo(() => {
    return posts.reduce((total, post) => total + post.comments.length, 0)
  }, [posts]);

  const handleChangeTab = (event: React.SyntheticEvent, newTab: number) => {
    setTab(newTab);
  };

  const handleReload = () => {
    dispatch(getPosts());
  };

  return (
    <Root className={classes.root}>
      <Container maxWidth="md">
        <Tabs
          value={tab}
          onChange={handleChangeTab}
          aria-label="disabled tabs example"
        >
          <Tab label="Posts" />
          <Tab label="Comments" />
        </Tabs>

        <Paper className={classes.paper}>
          <Stack direction="row" alignItems="center">
            <Button onClick={handleReload}>Reload</Button>

            <Stack direction="row" spacing={2} sx={{ ml: 'auto' }}>
              <Typography>Like {totalLikeCount}</Typography>
              <Typography>Comments {totalCommentsCount}</Typography>
            </Stack>
          </Stack>

          <Divider />

          {tab === 0 && (
            <Box mt={4}>
              {
                posts && posts.map((post, index) => (
                  <>
                    <Post key={index} post={post} />
                    {
                      index < POSTS.length -1 && <Divider sx={{ mb: 2 }} />
                    }
                  </>
                ))
              }
            </Box>
          )}

          {tab === 1 && (
            <Box mt={4}>
              {
                posts && posts.map((post, index) => (
                  <>
                    <Typography variant="h6">{ post?.title }</Typography>
                    {
                      post && post?.comments.map((itemComment) => (
                        <Box>
                          <Typography>{itemComment.comment}</Typography>
                          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Typography align="right" variant="caption">
                              {itemComment.date}
                            </Typography>
                          </Box>
                        </Box>
                      ))
                    }
                    {
                      index < POSTS.length -1 && <Divider sx={{ mb: 2 }} />
                    }
                  </>
                ))
              }
            </Box>
          )}
        </Paper>
      </Container>
    </Root>
  );
};

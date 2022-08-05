router.post('/:shortId', async (req, res, next) => {
    const { shortId } = req.params;
      const { title, content } = req.body;
    const post = await Post.findOneAndUpdate({ shortId }, {
          title, content,
      }); // shortId 검색해서 내용을 title, content로 변경하겠다는 의미 
    if (!post) {
        next (new Error('Post NotFound'));
        return;
    }
      res.redirect(`/posts/${shortId}`);
  });
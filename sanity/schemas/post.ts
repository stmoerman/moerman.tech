export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'overview',
      type: 'string',
      title: 'Overview',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
            },
          ],
        },
        {
          type: 'code',
          name: 'codesnippet',
          title: 'Code snippet field',
          options: {
            languageAlternatives: [
              {title: 'Javascript', value: 'javascript'},
              {title: 'TypeScript', value: 'typescript'},
              {title: 'C#', value: 'csharp'},
              {title: 'CSS', value: 'css'},
              {title: 'Go', value: 'go'},
              {title: 'Python', value: 'python'},
              {title: 'YAML', value: 'yaml'},
              {title: 'JSON', value: 'json'},
              {title: 'MySQL', value: 'sql'},
            ],
          },
        },
      ],
    },
  ],
}

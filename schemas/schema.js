// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
  title: 'SiteImages',
  name: 'siteimages',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image'
    }
  ]
},
  {
  title: 'SmallImages',
  name: 'smallimages',
  type: 'document',
  fields: [
  {
    title: 'Title',
    name: 'title',
    type: 'string'
  },
  {
    title: 'Image',
    name: 'image',
    type: 'image'
  }
  ]
  },
{
title: 'Header',
name: 'header',
type: 'document',
fields: [
{
  title: 'Title',
  name: 'title',
  type: 'string'
},
{
  title: 'Logo',
  name: 'logo',
  type: 'image'
}

]
}
  ])
})

/**
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast').Element} Element
 *
 * @typedef {Record<string, string>} Sources
 * @typedef {Record<string, Sources>} Options
 */

import { isElement } from 'hast-util-is-element'
import path from 'path'
import replaceExt from 'replace-ext'
import { visit } from 'unist-util-visit'

const own = {}.hasOwnProperty

/**
 * @type {import('unified').Plugin<[Options] | void[], Root>}
 */
export default function rehypePicture(data) {
  const uploads = data || {}

  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (
        !parent ||
        typeof index !== 'number' ||
        !isElement(node, 'img') ||
        !node.properties ||
        !node.properties.src
      ) {
        return
      }

      const src = String(node.properties.src)
      console.log("image source", node.properties)
      const extension = path.extname(src).slice(1)



      /** @type {Element['children']} */
      const nodes = []
      const map = settings[extension]
      /** @type {string} */
      let key

      for (key in map) {
        if (own.call(map, key)) {
          nodes.push({
            type: 'element',
            tagName: 'source',
            properties: { srcSet: [replaceExt(src, '.' + key)], type: map[key] },
            children: []
          })
        }
      }

      /** @type {Element} */
      const replacement = {
        type: 'element',
        tagName: 'picture',
        properties: {},
        children: nodes.concat(node)
      }

      parent.children[index] = replacement
    })
  }
}

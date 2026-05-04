import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// Custom Explorer sorting logic to respect the "order" frontmatter inside folder indexes
const explorerComponent = Component.Explorer({
  sort: (a, b) => {
    const getOrder = (node: any) => {
      // 1. If the node itself has an order (direct file)
      if (node.frontmatter?.order !== undefined) {
        return node.frontmatter.order
      }
      // 2. If it's a folder, look for a child named 'index' and take its order
      if (node.children) {
        const indexNode = node.children.find((child: any) => child.name === "index")
        if (indexNode?.frontmatter?.order !== undefined) {
          return indexNode.frontmatter.order
        }
      }
      return Infinity
    }

    const orderA = getOrder(a)
    const orderB = getOrder(b)

    if (orderA !== orderB) {
      return orderA - orderB
    }

    // Fallback to alphabetical display name (Charqye vs Bestiary)
    return a.displayName.localeCompare(b.displayName)
  },
})

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    explorerComponent,
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    explorerComponent,
  ],
  right: [],
}
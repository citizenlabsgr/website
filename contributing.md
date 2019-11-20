# Contributing to Citizen Labs Website

## Basics of Current Website

From [Hugo:](https://gohugo.io/)

> Hugo is a fast and modern static site generator written in Go, and designed to make website creation fun again.
Hugo is a general-purpose website framework. Technically speaking, Hugo is a static site generator. Unlike systems that dynamically build a page with each visitor request, Hugo builds pages when you create or update your content.

In very simple terms, Hugo separates elements into specific elements which can be edited. When the edits are complete a command is given to create static html files that are then used for the website.

> In technical terms, Hugo takes a source directory of files and templates and uses these as input to create a complete website.

Modules are the core building blocks in Hugo, that may contain one or more of the [7 component types defined in Hugo:](https://gohugo.io/getting-started/directory-structure/#directory-structure-explained)
- [static:](https://gohugo.io/content-management/static-files/) Content includes things that do not change and specific to website. Images, CSS, and javascript are commonly stored within this component.
- [content:](https://gohugo.io/content-management/organization/) This component holds the majority of written content for the website as markdown files.
- [layouts:](https://gohugo.io/templates/) Small component html files that define how content should be displayed and combined to create the static html files ultimately used for the website. Templates include list pages, your homepage, taxonomy templates, partials, single page templates, and more.
- [data:](https://gohugo.io/templates/data-templates/) This directory is used to store configuration files that can be used by Hugo when generating your website. You can write these files in YAML, JSON, or TOML format.
- [assets:](https://gohugo.io/hugo-pipes/introduction/#asset-directory) Stores all the files which need be processed by Hugo Pipes. Only the files whose .Permalink or .RelPermalink are used will be published to the public directory.
- [i18n:](https://gohugo.io/content-management/multilingual/) Internationalization (i18n) is the process of developing products in such a way that they can be localized for languages and cultures easily.
- [archetypes:](https://gohugo.io/content-management/archetypes/#what-are-archetypes) Archetypes are templates used when creating new content. The template files contain preconfigured front matter and possibly also a content disposition for your website’s content types.

Hugo Resources:

 - [Hugo documentation](https://gohugo.io/documentation/)
 - Very good [Youtube tutorial on Hugo by Mike Dane & Giraffe Academy](https://www.youtube.com/playlist?list=PLLAZ4kZ9dFpOnyRlyS-liKL5ReHDcj4G3)

## Site Settings
Basic overall site configurations are contained in `config.toml` file, within the root directory. This file contains among other things:

 - designation of the theme to be used
 - site navigation
 - logo to be used
 - social media links
 - analytic settings

## Theme/Overall Site Design

Hugo provides advanced theming support with Theme Components and a growing [collection of themes](https://themes.gohugo.io) that can be utilized. We are currently using the [Ananke theme](https://themes.gohugo.io/gohugo-theme-ananke/), but the next version will use [Hugo-Fresh.](https://themes.gohugo.io/hugo-fresh/)

Theme(s) are downloaded and placed in the `themes` directory. The config.toml file located in the root directory identifies which of the themes are currently used for the website.

## Site Content

Our site content is maintained in the `content` directory as markdown files. The markdown files follow a specific format, for more details review [Hugo's instructions on content management.](https://gohugo.io/categories/content-management)

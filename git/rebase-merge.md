---
author: Christophe Porteneuve
description: |
    A git merge should only be used for incorporating the entire feature set
    of branch into another one, in order to preserve a useful, semantically
    correct history graph. Such a clean graph has...
lang: en
parsely-post-id: 4fa1a48c53aa
referrer: 'unsafe-url'
robots: 'index,follow'
theme-color: '\#000000'
title:
- 'Getting solid at Git rebase vs. merge - Christophe Porteneuve - Medium'
- 'Getting solid at Git rebase vs. merge - Christophe Porteneuve - Medium'
twitter:app:id:iphone: 828256236
twitter:app:name:iphone: Medium
twitter:app:url:iphone: 'medium://p/4fa1a48c53aa'
twitter:card: 'summary\_large\_image'
twitter:creator: '\@porteneuve'
twitter:image:src: 'https://miro.medium.com/max/1200/1\*cL3Yv1VzLbHY7V4vyASH2w.jpeg'
twitter:site: '\@Medium'
viewport: 'width=device-width,minimum-scale=1,initial-scale=1'
---

::: {#root}
::: {.a .b .c}
::: {.d .e .f .g .h .i .j .k}
:::

<div>

</div>

<div>

::: {.n .p}
::: {.z .ab .ac .ae .af .ag .ah .ai}
::: {.aj .n .o .ak .al}
::: {.r .am .w}
::: {.n .o}
[](/?source=post_page-----4fa1a48c53aa----------------------)

::: {.ba .g}
:::

::: {.r .bb}
:::

::: {.ba .g}
::: {#lo-general-navbar-open-in-app-button .bc}
::: {.bd .ba .bb}
[Open in
app](https://rsci.app.link/?%24canonical_url=https%3A%2F%2Fmedium.com%2Fp%2F4fa1a48c53aa&~feature=LoOpenInAppButton&~channel=ShowPostUnderUser&~stage=mobileNavBar&source=post_page-----4fa1a48c53aa----------------------){.be
.bf .bg .bh .bi .bj .bk .bl .bm .bn .bo .bp .bq .br .bs .bt}
:::
:::
:::

::: {.ba .al}
::: {.bu .bv .r .g}
:::

::: {#lo-post-page-navbar-topic-copy .bc}
[](https://medium.com/topic/?source=post_page-----4fa1a48c53aa----------------------)

::: {.an .ao .ap .aq .ar .as .at .au .av .aw .ax .ay .az}
:::
:::
:::
:::
:::

::: {.r .bw .w}
::: {.n .o}
::: {.n .g}
::: {#lo-post-page-navbar-upsell-button .bc}
<div>

[[Become a member]{.cd .b .ce .cf .cg .ch .r .ci
.cj}](https://medium.com/membership?source=upgrade_membership---nav_full------------------------){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .bz .ca .bq .br .cb .cc}

</div>
:::

::: {#lo-post-page-navbar-sign-in-link .bc}
::: {.bd .r}
[[Sign
in](https://medium.com/m/signin?operation=login&redirect=https%3A%2F%2Fmedium.com%2F%40porteneuve%2Fgetting-solid-at-git-rebase-vs-merge-4fa1a48c53aa&source=post_page-----4fa1a48c53aa----------------------){.be
.bf .bg .bh .bi .bj .bk .bl .bm .bn .bo .bp .bq .br .bs .bt}]{.cd .b .ce
.cf .cg .ch .r .ci .cj}
:::
:::
:::
:::
:::
:::
:::
:::

</div>

::: {.ck .aj .r .cl .ak}
:::

::: {.section .cm .cn .co .cp .ai .cq .cr .r}
:::

[]{.r}

<div>

::: {.s .u .cs .ct .cu .cv}
:::

::: {.section .cw .cx .cy .cz .da}
<div>

::: {.db .dc .dd .de .df .ai .dg .dh .di .dj .dk .dl .dm .dn .do}
::: {.dp .dq .dr}
::: {.n .p}
::: {.z .ab .ac .ae .af .ds .ah .ai}
<div>

::: {#title .dt .du .dv .ce .dw .b .dx .dy .dz .ea .eb .ec .ed .ee .ef .eg .eh}
Getting solid at Git rebase vs. merge {#getting-solid-at-git-rebase-vs.-merge .dw .b .dx .ei .dz .ej .eb .ek .ed .el .ef .em .dv}
=====================================
:::

</div>

Each one is best for specific purposes, so learn when to use them efficiently, and why. {#subtitle .en .du .eo .ce .cd .ep .eq .er .fb .es .et .fc .eu .ev .fd .ew .ex .fe .ey .ez .ff .fa}
---------------------------------------------------------------------------------------

::: {.fg}
::: {.n .fh .fi .fj .fk}
::: {.o .n}
<div>

[![Christophe
Porteneuve](https://miro.medium.com/fit/c/96/96/0*E5E12sAhnnsMPeAF.png){.r
.fl .fm .fn width="48"
height="48"}](/@porteneuve?source=post_page-----4fa1a48c53aa----------------------)

</div>

::: {.fo .ai .r}
::: {.n}
::: {style="flex:1"}
[]{.cd .b .ce .cf .cg .ch .r .dv .fp}

::: {.fq .n .o .fr}
[[Christophe
Porteneuve](/@porteneuve?source=post_page-----4fa1a48c53aa----------------------){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .fv .bq .br .fw .fx}]{.cd .ep .fs
.cf .av .ft .fu .as .at .au .dv}

::: {.fy .r .bw .h}
Follow
:::
:::
:::
:::

[[]{.cd .ep .fs .cf .av .ft .fu .as .at .au .eo}]{.cd .b .ce .cf .cg .ch
.r .eo .gs}

<div>

[May 7,
2014](/@porteneuve/getting-solid-at-git-rebase-vs-merge-4fa1a48c53aa?source=post_page-----4fa1a48c53aa----------------------){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .fv .bq .br .fw .fx} · 22 min read

</div>
:::
:::

::: {.n .gt .gu .gv .gw .gx .gy .gz .ha .y}
::: {.n .o}
::: {.hb .r .bw}
:::

::: {.hb .r .bw}
:::

::: {.hb .r .bw}
:::

::: {.hd .r}
::: {.he}
:::
:::

::: {.hf .r .am}
:::
:::
:::
:::
:::
:::
:::
:::
:::

</div>
:::

::: {.section .cw .cx .cy .cz .da}
::: {.n .p}
::: {.z .ab .ac .ae .af .ds .ah .ai}
**TL;DR**

A *git merge* should only be used for **incorporating the entire feature
set of branch into another one**, in order to preserve a useful,
semantically correct history graph. Such a clean graph has significant
added value.

All other use cases are better off using *rebase* in its various
incarnations: classical, three-point, interactive or cherry-picking.

*Medium is an awesome platform, but it lacks a few tweaks for proper
code-/tech-related content just now, chief of which is inline monospace
formatting with no typographical replacements in them
(syntax-highlighted code blocks would be nice too, but I didn't need
these here). So I resorted to italics for commands, branch names, etc.
This seems to remain legible, at any rate, this was the best I could
do!*

A clean, usable history that makes sense {#0ceb .hx .hy .ap .ce .cd .hz .dx .ia .dz .ib .ic .id .ie .if .ig .ih .ii}
========================================

One of the most important skills of a Git user lies in their ability to
maintain a clean, semantic public history of commits. In order to
achieve this, they rely on four main tools:

-   [*git commit \--amend*]{#eb1a}
-   [*git merge*, with or without *\--no-ff*]{#cc6f}
-   [*git rebase*, especially *git rebase -i* and *git rebase
    -p*]{#809c}
-   [*git cherry-pick* (which is functionally inseparable from
    rebase)]{#381c}

I often see people put *merge* and *rebase* in the same basket, under
the fallacy that both result in "getting commits from the branch across
in our own branch" (which is, by the way, incorrect).

These two commands actually have hardly anything in common. They have
entirely separate purposes and, indeed, are not supposed to be used for
the same reasons at all.

I shall try to not only highlight their respective roles, but also equip
you with a few reflexes and best practices so you can always produce a
public history that is both expressive (concise yet clear) and semantic
(viewing the history graph reflects the team's goals in an obvious way).
A top-notch history adds significant value to the whole team's work, be
it contributors coming in for the first time or getting back after a
while away, project leads, code reviewers, etc.

When should I use *merge*? {#9f8c .hx .hy .ap .ce .cd .hz .dx .ia .dz .ib .ic .id .ie .if .ig .ih .ii}
==========================

As its name implies, *merge* performs a merge, a fusion. We want to move
the current branch ahead so it incorporates the work of another branch.

The **real question** you should ask yourself is this: *"what does this
other branch represent?"*

**Is it just a local, temporary branch**, that I had just created out of
precaution, in order for *master* to remain clean in the meantime? If
so, it is not only useless but downright counter-productive for this
branch to remain visible in the history graph, as an identifiable
"railroad switch."

If the receiving branch (say *master*) has moved ahead since the branch
started, and is therefore not a direct ancestor of it anymore, we'll
treat our branch as "too old" and use *rebase* to replay its commits on
top of our up-to-date *master* to maintain a linear graph. But if
*master* remained untouched since we branched out, a *fast-forward
merge* (which would be automatic in that situation, by default) will be
sufficient.

**Is it a "well-known" branch**, clearly identified by the team or
simply by my work schedule? Then we turn our previous reasoning on its
head. Our branch may represent a sprint or story in our agile
methodology, or an issue/ticket in our bug tracking system.

Is is then preferable, perhaps even mandatory, that the entire extent of
our branch remain visible in the history graph. This would be the
default result if the receiving branch (say *master*) had moved ahead
since we branched out, but if it remained untouched, we will need to
*prevent* Git from using its *fast-forward* trick. In both these cases,
we will always use *merge*, never *rebase*.

When should I use *rebase*? {#f2b9 .hx .hy .ap .ce .cd .hz .dx .ia .dz .ib .ic .id .ie .if .ig .ih .ii}
===========================

As its name suggests, *rebase* exists to change the "base" of a branch,
which means its origin commit. It replays a series of commits on top of
a new base.

This is mostly needed when **local work** (a series of commits) is
deemed to **start from an obsolete base**. This could happen several
times a day, when you try to push local commits to a *remote* only to be
denied because the tracking branch (say *origin/master*) is stale: since
it last sync'd with our *remote*, someone pushed updates to it, so that
pushing our own code path would overwrite that previously-sent, parallel
work. This is not nice to our collaborators, so *push* gives us the
boot.

**A merge** (which is what *pull* would do internally, by default) **is
less than ideal here, as it creates noise**, wrinkles if you will, in
the history graph, when the whole thing is really just a timing glitch
in the sequence of work on the branch. In an ideal world, I would have
worked after the others, from an up-to-date base, and the branch would
have remained nicely linear.

A need for *rebase* also arises when you started a parallel avenue of
work (an experiment, an R&D work...) a long time ago but haven't found
time for it again until just now, except the base branch---the one from
which your experimental one started out---has moved on considerably
since. When you finally hunker down to work on your experiment again,
you'd like to start from a more recent base, so you can benefit from its
bug fixes and other nice evolutions. But a merge (e.g. of *master* in
*experiment*) is not what you're looking for here, even from a
conceptual standpoint.

There is a final use case, an extremely frequent one actually, for
*rebase*: it's not about changing the base here, it's about **cleaning**
the series of commits in the branch. In real life, our histories aren't
exactly pristine from the get-go: if I commit regularly and frequently
(which I do, when I use Git properly), I'm still just human and my work
schedule isn't always optimal and consistent:

-   [I go back and forth between topics, that end up interleaved in my
    history instead of being cohesive commit groups/sequences;]{#9641}
-   [It takes me several consecutive (or even non-consecutive!) commits
    to *actually* fix a bug or complete a change that impacts multiple
    files;]{#0b04}
-   [I work in one direction, but eventually change tack and go back by
    *reverting* one or more commits that prove inadequate;]{#7269}
-   [I make awkward typo's or shameful mistakes in my commit
    messages;]{#7bdb}
-   [Out of sheer laziness at the time, I lump together a number of
    unrelated changes in one big fat commit, instead of properly
    crafting single-topic, atomic commits; such mammoths invariably end
    up with lousy messages like "stuff," "lots of changes," etc.]{#cae1}

This is all OK so long as it remains local, but **out of respect for
others and myself, I avoid pushing that nice little trainwreck** on the
*remote*: before I *push*, I clean up that history by using the
über-cool *git rebase -i*. The base commit (say *origin/master*) doesn't
change, only the series of commits *since* is rewritten, and it's
entirely local so it doesn't jeopardize the work of others.

Quick summary: core workflow principles {#abba .hx .hy .ap .ce .cd .hz .dx .ia .dz .ib .ic .id .ie .if .ig .ih .ii}
=======================================

The following principles embody reflexes you should acquire; in the
remainder of this article, we'll dive into the details of the Git
commands to achieve these effortlessly.

-   [**When I merge a *temporary* local branch...** I make sure it
    doesn't show in my history graph by ensuring a *fast-forward merge*
    for it, which may require a prior *rebase*.]{#cdf1}
-   [**When I merge a *well-known* local branch...** I make sure it
    shows in my history graph, from beginning to end, by ensuring a
    *true merge*.]{#a955}
-   [**When I'm about to push my local work...** I clean up my local
    history first so I can push something clean and usable.]{#d649}
-   [**When my push is denied** because of extra work that got pushed in
    the meantime, **I rebase on the updated remote branch** to avoid
    polluting the graph with lots of ill-advised micro-merges.]{#9fdf}

> Check out our [amazing Git-related video
> courses](https://screencasts.delicious-insights.com/){.bx .gr .jj .jk
> .jl .jm}! Some of them are even free!

Merging a branch, the smart way {#a83e .hx .hy .ap .ce .cd .hz .dx .ia .dz .ib .ic .id .ie .if .ig .ih .ii}
===============================

You should merge a branch only to incorporate the entire feature set it
provides. As discussed earlier, the core question you must ask yourself
then is ***"should this branch remain visible in the graph?"***

When it represents a **well-known body of work** (a task in the project
management system, a bugfix linked to an issue or ticket, a story or use
case in your agile methodology or project documents, etc.), then it is
desirable for it to **remain visible in the long run**, even when the
branch name gets deleted.

Otherwise, the branch was just a technical entity and has no reason to
keep "existing visually" in the history graph. We will then make sure we
use a *fast-forward merge* for it, which may require a prior *rebase* of
it.

Let's see what both situations look like.

Remaining identifiable thanks to a *true merge* {#032f .jn .hy .ap .ce .cd .hz .jo .jp .jq .jr .js .jt .ju .jv .jw .jx .jy}
-----------------------------------------------

Let's assume we have a *feature branch* called *oauth-signin*, and a
receiving branch that is *master*.

If *master* has moved on since *oauth-signin* sprouted from it, we're
good. This might be due to other branches getting merged in *master*; or
direct commits on it; or someone *cherry-picked* commits in it. At any
rate, there is now a divergence between *master* and *oauth-signin*. Git
will automatically go for a *true merge* then.

![A true merge is what you automatically get when the merged branch
diverged from the receiving
one](https://miro.medium.com/max/60/1*hoORKnNWlCd3Ko-TrEgqtA.png?q=20){.s
.t .u .km .ai .kt .ku .kv width="759" height="260"}

This is what we want, with no particular tweaks to get it.

However, if *master* hasn't moved since *oauth-signin* sprouted from it,
the latter is a *direct descendant* of *master*. Which means that Git
will, by default, react to a *merge* by doing a *fast-forward*: it will
not create a merge commit, but simply move the *master* branch label to
the same commit *oauth-signin* points to. The *oauth-signin* branch
becomes transparent: the graph does not isolate its starting point
anymore, and once its branch name gets deleted, there won't be any trace
left of it in the graph.

This is not what we want, so we'll force a *true merge* by using the
*\--no-ff* option (which obviously stands for *no fast-forward*, not *no
Firefox*).

![We can force a true merge when there is no divergence by using the
\--no-ff
option](https://miro.medium.com/max/60/1*WxU79PuNEEb3WmWdU_TOFA.png?q=20){.s
.t .u .km .ai .kt .ku .kv width="767" height="246"}

Merging transparently by ensuring a *fast-forward* {#8fb1 .jn .hy .ap .ce .cd .hz .jo .jp .jq .jr .js .jt .ju .jv .jw .jx .jy}
--------------------------------------------------

This is the opposite situation: our branch should not remain visible in
the graph, as it bears no semantic value. We must then ensure the merge
will end up doing a *fast-forward*.

Let's assume we have a comfort, just-for-safety local branch named
*quick-fixes*, and *master* is the receiving branch.

If *master* hasn't moved on since *quick-fixes* sprouted from it, we're
in the clear: by default, Git will perform a *fast-forward*.

![Merging a direct descendant will fast-forward by
default](https://miro.medium.com/max/60/1*Tf33s-l8Aa8gDWFP9hF9DA.png?q=20){.s
.t .u .km .ai .kt .ku .kv width="690" height="216"}

On the other hand, if *master* did move ahead since *quick-fixes*
started, we would get a *true merge* and our branch would pollute the
graph, which we obviously don't want. Adding the *\--ff* option wouldn't
change anything: this is already the default behavior, and produces no
miracles. As for *\--ff-only*, it only refuses *true merges*, so it will
block our merge attempt.

What we need is to tweak *quick-fixes* so it becomes a direct descendant
of *master* again, making the *fast-forward* possible. The perfect
command for this is indeed *rebase*. This is exactly what we're trying
to do here: we want to *change the base commit* of our *quick-fixes*
branch so it is not the old tip of *master* but its current tip. This
will rewrite the history of our *quick-fixes* branch, but as it is
strictly local so far, that doesn't matter a bit.

![By rebasing a diverged local branch before merging it, we can ensure
fast-forward, so guarantee it will be transparent in the final
graph.](https://miro.medium.com/max/60/1*ngzssBgPbG3GcIVj6wCb4w.png?q=20){.s
.t .u .km .ai .kt .ku .kv width="689" height="467"}

Pay special attention to how this scenario plays out:

1.  [We have a diverging branch to merge transparently, so...]{#9773}
2.  [We rebase it on our up-to-date receiving branch,]{#4bd2}
3.  [We then get back to the receiving end, as rebase changed the
    current branch,]{#22cc}
4.  [Finally we merge it, the default *fast-forward* being available
    now.]{#d86f}

And *voilà!* Depending on the nature of our branch, we are now assured
to always obtain the graph we want.

Beware of the merge settings you might have {#e0f4 .jn .hy .ap .ce .cd .hz .jo .jp .jq .jr .js .jt .ju .jv .jw .jx .jy}
-------------------------------------------

The behaviors we discussed so far reflect the default Git settings: it
will perform a *fast-foward* whenever possible (the merged branch is a
direct descendant of the receiving one), and do a *true merge*
otherwise.

However, Git lets you define configuration settings for all this, at the
local branch level, the local repo level or the global (user) level. For
instance, any one of the following settings will prevent the automatic
*fast-forward* in the previous examples:

-   [*branch.master.mergeoptions = \--no-ff*]{#055c}
-   [*merge.ff = false*]{#a26b}

Conversely, any of the following settings will require a *fast-forward*,
refusing to perform any *true merges*:

-   [*branch.master.mergeoptions = \--ff-only*]{#48b2}
-   [*merge.ff = only*]{#f959}

If you stumble while trying out the previous examples, or on any repos
you might use, do check your local and global configurations.

Rebasing an old branch {#ed63 .hx .hy .ap .ce .cd .hz .dx .ia .dz .ib .ic .id .ie .if .ig .ih .ii}
======================

Sometimes you start work on a feature branch then don't have time for it
anymore for a long time. When you get back to it, it lacks many fixes
and cool new stuff from it base branch, that evolved a lot in the
meantime. That bothers you. In such cases, and assuming nobody is
working on that branch just now except you, it is perfectly acceptable
to rebase it over an up-to-date base branch:

``` {.ka .kb .kc .kd .ke .li .lj .lk}
(master) $ git rebase master better-stats
```

Beware though: if that branch had been *pushed* to a remote (for backup
purposes, for instance), you'll need to force the next push of it with
the *-f* option, as you just replaced its commit history with a fresh
one.

Cleaning up your local history before pushing {#541c .hx .hy .ap .ce .cd .hz .dx .ia .dz .ib .ic .id .ie .if .ig .ih .ii}
=============================================

When using Git correctly, we do frequent atomic commits. We also are
mindful not to fall into the "subversionian" reflex of *commit+push*,
which reinstates one of the graver faults of centralized source control:
every commit is immediately sent to the server.

Indeed, that would deprive us of the flexibility of decentralized source
control, which lets us be flexible as long as we haven't *pushed*. All
our local commits are for now ours alone, so we have complete **freedom
to clean them up, rewrite them, cancel them**, right up until the moment
we share our work through the *remote*. Why deny ourselves that
flexibility and confort by *pushing* too often, too soon?

In a typical Git workflow, you'd easily hammer out 10 to 30 commits a
day, but would usually only push 2 or 3 times, sometimes even less.

Repeat after me: **before pushing, I shall clean up my local history**.

There are lots of reasons for your local history to be messy; I went
through these in the intro, but here they are again to spare you a
tedious scroll:

-   [**You went back and forth between topics**, that ended up
    interleaved in your history instead of being cohesive commit
    groups/sequences;]{#e048}
-   [**It took you several consecutive (or even non-consecutive!)
    commits** to *actually* fix a bug or complete a change that impacts
    multiple files;]{#5476}
-   [**You worked in one direction, but eventually changed tack** and
    got back by *reverting* one or more commits that prove
    inadequate;]{#dc12}
-   [**You made awkward typo's or shameful mistakes** in your commit
    messages (I know, that doesn't sound likely, seeing how literate,
    well-read and articulate the average developer is, shame on me for
    even thinking they could mistype);]{#bfbe}
-   [Out of sheer laziness at the time, **you lumped together a number
    of unrelated changes in one big fat commit**, instead of properly
    crafting single-topic, atomic commits; such mammoths invariably end
    up with lousy messages like "stuff," "lots of changes," etc.]{#ddbb}

This all yields a rather messy history, difficult to read, understand or
leverage by others; and don't forget: **others is you too, 2 months down
the line**.

But this is no cause for alarm; Git provides a nifty way for you to
effortlessly clean up your local history using whatever small touches
are necessary:

-   [Reorder commits]{#5d3d}
-   [Squash them together]{#4ab0}
-   [Split one up (trickier)]{#36af}
-   [Remove commits altogether]{#5622}
-   [Rephrase commit messages]{#2021}

This all hinges on a rather refined use of *reset* and *commit*, but
*rebase* provides an interactive mode that will drive it all in a rather
sweet, more user-friendly way.

Interactive rebasing is just like regular rebasing, except that instead
of following a simple, foreseeable script ("I'll cherry-pick every
commit one by one, just skipping those that end up being duplicates on
the new base"), it lets you edit the script beforehand.

In our current situation, **the *rebase* will not, actually, change the
base. It will only rewrite the history since that commit**. In an
everyday situation, that branch already exists on your *remote*, and you
wish to clean up the local commits you made since your last sync
(usually your last *pull*).

Let's say you're working on an *experiment* branch. Your command line
would then be, typically:

``` {.ka .kb .kc .kd .ke .li .lj .lk}
(experiment) $ git rebase -i origin/experiment
```

Here you're rebasing the current branch (*experiment*) on a commit that
already exists in its history (*origin/experiment*). If this *rebase*
wasn't interactive, it would be useless (and would indeed be
short-circuited as a no-op). But thanks to the *-i* option, you'll be
able to edit the script of operations *rebase* will go through. That
script will open in your usual Git editor, the same used for commit
messages, etc.

If you wish to create an alias for that kind of work, as a reflex before
*pushing*, you may want not to have to type the base. As this is usually
the current branch's tracked remote branch, you can leverage the *@{u}*
special revision syntax (available [since
1.7.0](https://github.com/git/git/blob/v1.7.0/Documentation/RelNotes-1.7.0.txt#L104-L107){.bx
.gr .jj .jk .jl .jm}, over 4 years ago; longer form: *@{upstream}*),
like so:

``` {.ka .kb .kc .kd .ke .li .lj .lk}
$ git config —global alias.tidy “rebase -i @{upstream}..”
(experiment) $ git tidy
```

Let's assume the following, apparently messier-than-usual history...

![A particularly messy local history since the last
sync](https://miro.medium.com/max/60/1*7h2euepMfX8rXKqXM4c2Zg.png?q=20){.s
.t .u .km .ai .kt .ku .kv width="771" height="156"}

*(This capture is in French, so the ugliness of it might not be apparent
to you; but you see an early commit getting reverted later on, and two
distant commits to introduce a locale definition properly; also, there's
apparently a lumpy commit with two separate topics, judging by the +
sign)*

We wish to clean up this series of commits before *pushing*:

``` {.ka .kb .kc .kd .ke .li .lj .lk}
(experiment) $ git rebase -i origin/experiment
```

Our editor opens up with the following script:

``` {.ka .kb .kc .kd .ke .li .lj .lk}
pick 057ad88 Locale fr-FR
pick ef61830 Opinion bien tranchée
pick 8993c57 ML dans le footer + rewording Interactive Rebasing
pick dbb7f53 Locale plus générique (fr)
pick c591fd7 Revert "Opinion bien tranchée"
pick 2863a46 MàJ .gitignore# Rebase 34ae1ae..2863a46 onto 34ae1ae
#
# Commands:
# p, pick = use commit
# r, reword = use commit, but edit the commit message
# e, edit = use commit, but stop for amending
# s, squash = use commit, but meld into previous commit
# f, fixup = like "squash", but discard this commit's log message
# x, exec = run command (the rest of the line) using shell
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted. #
# Note that empty commits are commented out
```

As per usual, Git is nice enough to throw an *ad-hoc* bit of
documentation our way (considering your average developer would rather
die than actually browse the doc...). The script at the beginning
describes what *rebase* will eventually do.

By default, it's a classic *rebase*: *cherry-picking* in sequence for
every commit in the list. Note this list is chronological (unlike *git
log*, which by default starts from the most recent and works backwards
in time).

Like any editor-based Git operation, leaving only blank or commented-out
lines will cancel the operation.

Let's see the various use cases we have:

-   [**Removing commits**: we just need to remove their lines.]{#3c80}
-   [**Reordering commits**: we just need to reorder the lines! Actual
    success is not guaranteed, however; if commit B's changeset depends
    on code introduced by commit A, inverting them will obviously result
    in trouble.]{#883c}
-   [**Rewording commit messages**: because of typos, lack of clarity,
    etc. Use the *reword* verb. There's no point in changing the message
    there and then, though: Git will ignore it but open the editor when
    the time comes for you to rephrase the message.]{#539a}
-   [**Squash commits together**: now that depends on why you're
    squashing. The *squash* verb will squash both the changesets *and*
    the messages. This is seldom what you want; most of the time, it's a
    bugfix that took you several commits to finalize, so the original
    message is adequate; in that situation, prefer the *fixup*
    verb.]{#fae4}
-   [**Split a commit**: this is the most advanced use case. Git will
    apply that commit, and *then* hand it out to us, over a *clean
    tree*. It is up to us to do whatever tweaks we want, then tell
    *rebase* to resume its operations, again from a *clean tree*. The
    adequate verb here is *edit*.]{#ba0f}

The situation above is intentionally über-messy, quite more so than
everyday pre-push contexts. But this serves to illustrate all the use
cases in what follows.

Squashing and *rewording* {#0abc .jn .hy .ap .ce .cd .hz .jo .jp .jq .jr .js .jt .ju .jv .jw .jx .jy}
-------------------------

We used two distant commits to introduce the desired locale: we first
added the locale with a value of *fr-FR* then changed it later to the
less restrictive *fr*. Simply removing the first commit would not work:
the second one would not find the code context for its own changeset and
fail to cherry-pick. No, we need to squash these commits together.

To do this, we start by shuffling script lines so they are consecutive
now:

``` {.ka .kb .kc .kd .ke .li .lj .lk}
pick 057ad88 Locale fr-FR
pick dbb7f53 Locale plus générique (fr)
…
```

As we do not wish to squash the commit messages, we use *fixup*:

``` {.ka .kb .kc .kd .ke .li .lj .lk}
pick 057ad88 Locale fr-FR
fixup dbb7f53 Locale plus générique (fr)
…
```

But in this specific situation, the initial commit message is not
adequate anymore: the locale won't be *fr-FR* in the end, but *fr*. So
we "anticipate" the squash by rewording the original message:

``` {.ka .kb .kc .kd .ke .li .lj .lk}
reword 057ad88 Locale fr-FR
fixup dbb7f53 Locale plus générique (fr)
…
```

In this situation, we could also have left the first commit alone and
used *squash* for the second one: Git would have popped open our editor
when squashing the latter commit so we had a chance of rewording the
squashed message, which would have worked for us too.

One step forward, one step back {#5810 .jn .hy .ap .ce .cd .hz .jo .jp .jq .jr .js .jt .ju .jv .jw .jx .jy}
-------------------------------

If we look at the global script, two commits obviously result in a
zero-sum game: the strong opinion ("Opinion bien tranchée") and its
later *revert*. Both are eventually noise in our history and should just
go away. Let's remove their lines from the script:

``` {.ka .kb .kc .kd .ke .li .lj .lk}
reword 057ad88 Locale fr-FR
fixup dbb7f53 Locale plus générique (fr)
pick 8993c57 ML dans le footer + rewording Interactive Rebasing
pick 2863a46 MàJ .gitignore
```

Laser cutting {#7a45 .jn .hy .ap .ce .cd .hz .jo .jp .jq .jr .js .jt .ju .jv .jw .jx .jy}
-------------

Finally, commit *8993c57* is apparently 2+ topics lumped together, as
its telltale "+" in the message indicates. It would be nicer to split it
into 2 more atomic, single-topic commits, one for the footer legalese
("ML dans le footer") and one for the interactive rebasing rewording
(the repo we are tweaking has a rebase-explaining page). Let's use
*edit* for that:

``` {.ka .kb .kc .kd .ke .li .lj .lk}
reword 057ad88 Locale fr-FR
fixup dbb7f53 Locale plus générique (fr)
edit 8993c57 ML dans le footer + rewording Interactive Rebasing
pick 2863a46 MàJ .gitignore
```

Ignition! {#cc5b .jn .hy .ap .ce .cd .hz .jo .jp .jq .jr .js .jt .ju .jv .jw .jx .jy}
---------

We save the script, close the file, and *rebase* takes over. Almost
immediately, it honors the leading *reword* by opening up the first
commit's message in the editor before applying it.

We'll turn this message into "Locale fr," save and close the file, and
let *rebase* proceed. It will squash the changeset for the next commit
("more generic locale"), apply the lumpy commit that comes next, *and
then hand it out to us*:

![Interactive rebasing pausing post-commit for us to edit it, according
to the "edit" verb in the
script](https://miro.medium.com/max/60/1*vZKbxRolvwcdKoXpPauBWA.png?q=20){.s
.t .u .km .ai .kt .ku .kv width="771" height="238"}

Note the two first steps, without modified commit message. Then the
commit to be split, which was indeed applied, as our prompt testifies by
not mentioning any dirty or staged status: we're on a *clean tree*.

There are tons of ways for us to do this splitting. We could, for
instance, start by turning the freshly applied commit into dirties
(unstaged file changes) with a *git reset HEAD\^*, then craft our split
commits one by one, by judicious use of *git add* or even *git add -p*.

Here, my commit only touches a single file, but with two unrelated
change hunks at once:

![Two perfectly unrelated changes in a single file, lumped into one
commit out of sheer
laziness.](https://miro.medium.com/max/60/1*c5tyMv08NnYCfUpBYOe8ww.png?q=20){.s
.t .u .km .ai .kt .ku .kv width="552" height="534"}

What we want is to turn a part of this (the first hunk, with the
rewording) into unstaged changes for a later commit, and keep the bottom
hunk (the legalese) there for our first commit, which will amend the
just-applied lumpy one we originally had.

So we use a *git reset -p HEAD\^ index.html* first to select the first
hunk for "cancellation", then a *git commit \--amend -m "ML dans le
footer"* to replace our original lumpy commit with the bottom remaining
hunk. Finally, we wrap our yet-unstaged changes in a second, final
commit using a *git commit -am "Rewording interactive rebasing"*. See
for yourself:

![Splitting a single-file lumpy commit, the I-know-git-reset-for-real
way.](https://miro.medium.com/max/60/1*DPQcc44X4fakUtt09au-LA.png?q=20){.s
.t .u .km .ai .kt .ku .kv width="771" height="519"}

Our original, lumpy commit is now split in 2 atomic commits:

![Two sweet, atomic, single-topic commits as a result of our care and
craft...](https://miro.medium.com/max/60/1*G7EpCsquExqyaWDgZ9ttvA.png?q=20){.s
.t .u .km .ai .kt .ku .kv width="722" height="569"}

We then let *rebase* resume with a *git rebase \--continue*. Our local
history now looks like this:

![My oh my, is that a cleaned up history or
what?](https://miro.medium.com/max/60/1*WPOqD1VJ7yLxWetmkVbavw.png?q=20){.s
.t .u .km .ai .kt .ku .kv width="681" height="128"}

The *git pull* and *pull + push* reflex trap {#7219 .hx .hy .ap .ce .cd .hz .dx .ia .dz .ib .ic .id .ie .if .ig .ih .ii}
============================================

We have now reached the final *rebase*-related topic I want to address:
*git pull*.

When we work without collaborators on a branch, we have it easy: all our
*git push*es get through, no need to *git pull* frequently. But as soon
as there are many of us on the same branch (which is indeed a frequent
scenario), we often hit a snag: between our last incoming sync (using
*git pull*) and the moment we want to share our local history (using
*git push*), another person shared their own work, so the remote branch
(say *origin/feature*) is now farther ahead than our local copy of it.

Hence, *git push* looks down his nose at us:

``` {.ka .kb .kc .kd .ke .li .lj .lk}
(feature u+3) $ git push
To /tmp/remote
  ! [rejected] feature -> feature (fetch first)
error: failed to push some refs to '/tmp/remote'
hint: Updates were rejected because the remote contains work
hint: that you do not have locally. This is usually caused by
hint: another repository pushing to the same ref. You may want
hint: to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help'
hint: for details.
(feature u+3) $
```

Nobody likes to hear they're "rejected..." In such a scenario, most
people follow by habit the advice Git gives and do a *git pull* to grab
the remote work, then *push* again.

This seems to work (the *push* gets through after all) but it sort of
blows. Let's see why that is.

What does *git pull* do anyway? {#3b8b .jn .hy .ap .ce .cd .hz .jo .jp .jq .jr .js .jt .ju .jv .jw .jx .jy}
-------------------------------

The *pull* is actually two operations in sequence:

1.  [A **network synchronization** of our local copy of the repo (the
    "database" inside the local repo, the *.git* directory) from the
    remote repository. This is actually a *git fetch*. This is the only
    part that does need connectivity to the remote repo.]{#8d1d}
2.  [By default, a **merge** (yes, *git merge*) of the remote tracked
    branch in our current local tracking branch.]{#a816}

To illustrate, if I currently am on *feature* and it tracks
*origin/feature*, a *git pull* is equivalent to:

1.  [*git fetch* (which needs connectivity to the *remote*)]{#03cc}
2.  [*git merge origin/feature* (no connectivity needed)]{#004e}

Ill-advised merges as *pulls* go {#9652 .jn .hy .ap .ce .cd .hz .jo .jp .jq .jr .js .jt .ju .jv .jw .jx .jy}
--------------------------------

Because I have local work present, and the remote has another recent
body of work, there is a divergence and *merge* will go for a *true
merge*, as we saw earlier in this article. My history graph will look
something like this:

![As git pull merges by default, any new work I pull besides my own
local work will result in a merge, which pollutes the
graph.](https://miro.medium.com/max/60/1*2LbAjDyaz7FG6Ck5Ji-W6Q.png?q=20){.s
.t .u .km .ai .kt .ku .kv width="667" height="295"}

This obviously goes against the rules we adopted earlier: a merge is
supposed to represent the incorporation of a well-known branch in
another one, **not base technicalities**.

Here, we're just out of luck: someone pushed before me on a branch we
collaborate on. In an ideal situation, they would have pushed earlier,
then I would have pulled and begun my own work, and the history would
have remained linear.

This is, indeed, what you always want to obtain on a *pull* (a linear
history within a branch), and to get it, all you have to do is ask *git
pull* to do a *rebase* instead of a *merge*, so it replays your local
work *on top of the newly obtained shared work*.

Using *rebase* for pulls {#af8b .jn .hy .ap .ce .cd .hz .jo .jp .jq .jr .js .jt .ju .jv .jw .jx .jy}
------------------------

You can do that interactively, using *git pull \--rebase*. This is,
however, not a trustworthy solution, as it requires you to be
ever-vigilant when you pull, which is unlikely: we're just humans, and
inherently fallible.

![Explicitly asking git pull to rebase instead of merging. Cool, but
prone to being forgotten now and
then.](https://miro.medium.com/max/60/1*_XTN26Bx_XFAcqXI2c7r3A.png?q=20){.s
.t .u .km .ai .kt .ku .kv width="599" height="328"}

We can do better by using configuration options, local or global, to
achieve the same result. This can happen at the branch level (e.g. local
configuration setting *branch.feature.rebase = true*) or as a global
behavior, which is what I recommend (e.g. global setting *pull.rebase =
true*).

**Starting with Git 1.8.5, there is an even better setting value**; but
to understand why it's better, we need to talk about pulling over a
local history that includes a merge.

The tricky case of a rebasing pull over a local merge {#5f53 .jn .hy .ap .ce .cd .hz .jo .jp .jq .jr .js .jt .ju .jv .jw .jx .jy}
-----------------------------------------------------

By default, **a *rebase* will *inline* merges**. As we now make sure our
merges have clear semantics in our history graph, this *inlining* is
real bummer:

![Rebase inlines merges by default, and boy does that blow hard for most
cases.](https://miro.medium.com/max/60/1*iJP1g0fiRhXCGT_lolv7KA.png?q=20){.s
.t .u .km .ai .kt .ku .kv width="550" height="523"}

We can avoid this by telling *rebase* we want to preserve merges: all we
need to do is invoke it with -*-preserve-merges* (or the shorthand
*-p*). However, before Git 1.8.5, there was no matching option for *git
pull*, nor was there a configuration setting for it.

So there was a risk (however minor it was, considering this is all local
and can be fixed again without straining our colleagues) in always
*pulling in rebase mode*: any carefully crafted local merge risked
*inlining* by a later *pull*, and if we were not vigilant before pushing
it, it would end up in the shared history instead of the desired merge.

[Since Git
1.8.5](https://github.com/git/git/blob/v1.8.5/Documentation/RelNotes/1.8.5.txt#L149-L152){.bx
.gr .jj .jk .jl .jm}, we can now **eliminate that risk once and for
all**:

-   [We can interactively *git pull \--rebase=preserve*]{#fc16}
-   [More importantly, all configuration options now accept, in addition
    to the more-problematic *true*, the useful value *preserve* (e.g.
    global configuration setting *pull.rebase = preserve*). This is what
    I actually recommend you use.]{#0af8}

![Pulling with a rebase, still preserving local merges. Yup, the Holy
Grail.](https://miro.medium.com/max/60/1*Z6Hptpl9Cw0HSxcBDkGNgg.png?q=20){.s
.t .u .km .ai .kt .ku .kv width="527" height="447"}

If you use a **Git older than 1.8.5.5** (update!), do pay attention to
such situations. When you have a local merge and your *push* is denied,
don't lazy out and *git pull* by default, **decompose it manually**:

1.  [*git fetch*]{#10db}
2.  [*git rebase -p origin/feature*]{#4885}

Conclusion {#8273 .hx .hy .ap .ce .cd .hz .dx .ia .dz .ib .ic .id .ie .if .ig .ih .ii}
==========

Well done you, you've read all the way down here, aren't you the valiant
one!

I hope this in-depth article helped illuminate *merge* and *rebase* for
you, so you can now pick the adequate approach depending on context, and
keep your commit histories and their graphs clean, legible, and in the
end bolster general productivity.

Happy Git'ing!

Want to learn more? {#9a19 .hx .hy .ap .ce .cd .hz .dx .ia .dz .ib .ic .id .ie .if .ig .ih .ii}
===================

I wrote [a number of Git articles](/@porteneuve){.bx .gr .jj .jk .jl
.jm}, and you might be particularly interested in the following ones:

-   [[Check out our amazing video
    courses!](https://screencasts.delicious-insights.com/){.bx .gr .jj
    .jk .jl .jm}]{#ec48}
-   [[Our GitHub video series is
    out!](/@porteneuve/our-github-video-course-series-is-out-1fe829e04a59){.bx
    .gr .jj .jk .jl .jm} (absolutely kick-ass, even for experts)]{#c3f9}
-   [[Fix conflicts only once with git
    rerere](/@porteneuve/fix-conflicts-only-once-with-git-rerere-7d116b2cec67){.bx
    .gr .jj .jk .jl .jm} (why do it twice?)]{#88c4}
-   [[How to make Git preserve specific files while
    merging](/@porteneuve/how-to-make-git-preserve-specific-files-while-merging-18c92343826b){.bx
    .gr .jj .jk .jl .jm} (sweet trick!)]{#7b40}
-   [[30 Git CLI options you should know
    about](/p/30-git-cli-options-you-should-know-about-15423e8771df){.bx
    .gr .jj .jk .jl .jm} (grab nerd points!)]{#ef0c}
-   [[Mastering Git
    subtrees](/p/mastering-git-subtrees-943d29a798ec){.bx .gr .jj .jk
    .jl .jm} (because submodules, I mean, yuck!)]{#c5e0}

Also, if you enjoyed this post, say so: [upvote it on
HN](https://news.ycombinator.com/item?id=9073436){.bx .gr .jj .jk .jl
.jm}! Thanks a bunch!

Although we don't publicize it much for now, we do offer
English-language Git training across Europe, based on our battle-tested,
celebrated [Total Git](http://www.git-attitude.fr/total-git/){.bx .gr
.jj .jk .jl .jm} training course. If you fancy one, just [let us
know](http://www.git-attitude.fr/request-intra-or-custom){.bx .gr .jj
.jk .jl .jm}!

*(We can absolutely come over to US/Canada or anywhere else in the
world, but considering you'll incur our travelling costs, despite us
being super-reasonably priced, it's likely you'll find a more
cost-effective deal using a closer provider, be it GitHub or someone
else. Still, if you want* ***us****, follow the link above and let's
talk!)*
:::
:::
:::

</div>

::: {.kk .cv .mm .mn .ai .mu .ms .mv data-test-id="post-sidebar"}
::: {.n .p}
::: {.z .ab .ac .ae .af .ag .ah .ai}
::: {.mw .n .mx}
::: {.cv}
::: {.my .mz .na .n}
::: {.n .o}
::: {.r .ki .nb .nc .nd .ne .nf}
[](https://medium.com/m/signin?operation=register&redirect=https%3A%2F%2Fmedium.com%2F%40porteneuve%2Fgetting-solid-at-git-rebase-vs-merge-4fa1a48c53aa&source=post_sidebar-----4fa1a48c53aa---------------------clap_sidebar-){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .bz .ca .bq .br .cb .cc}

::: {.bl .ng .nh .ni .nj .nk .nl .nm .q .nn .no}
:::
:::

::: {.r .np .nq .nr .ns .nt .nu .nv}
::: {.nw}
#### 1.6K {#k .cd .ep .fs .cf .ci}
:::
:::
:::
:::

::: {.mz .r}
:::

::: {.q}
:::
:::
:::
:::
:::
:::

::: {.kk .cv .mm .mn .mo .mp .mq .mr .ms .mt}
:::

<div>

::: {.nx .kf .n .mx .p}
::: {.n .p}
::: {.z .ab .ac .ae .af .ds .ah .ai}
::: {.n .ny}
:::

::: {.n .o .ny}
:::

::: {.nz .r}
-   [Git](/tag/git){.oc .od .gr .ci .r .lj .oe .a .b .gn}
-   [Merge](/tag/merge){.oc .od .gr .ci .r .lj .oe .a .b .gn}
-   [Rebase](/tag/rebase){.oc .od .gr .ci .r .lj .oe .a .b .gn}
:::

::: {.of .n .fh .y}
::: {.n .og}
::: {.oh .r}
::: {.n .o}
::: {.r .ki .oi .oj .ok .ol .om}
[](https://medium.com/m/signin?operation=register&redirect=https%3A%2F%2Fmedium.com%2F%40porteneuve%2Fgetting-solid-at-git-rebase-vs-merge-4fa1a48c53aa&source=post_actions_footer-----4fa1a48c53aa---------------------clap_footer-){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .bz .ca .bq .br .cb .cc}

::: {.c .on .fl .n .o .oo .ki .op .oq .or .os .ot .ou .ov .ow .ox .oy .oz .pa .pb .pc}
::: {.bl .ng .nh .ni .nj .nk .pd .nm .o .kw .fl .n .p .pe .u .km .s .t .ai .q .nn .no .pf}
:::
:::
:::

::: {.r .np .nq .nr .ns .nt .nu .nv}
::: {.ki .pg .nw}
#### 1.6K claps {#k-claps .cd .ep .fs .cf .ap}
:::
:::
:::
:::

::: {.r .ph .pi .pj .pk .pl}
:::
:::

::: {.n .o}
::: {.hb .r .bw}
:::

::: {.hb .r .bw}
:::

::: {.hb .r .bw}
:::

::: {.pm .r .bw}
::: {.q}
:::
:::
:::
:::

::: {.pn .po .pp .nz .r .pq .y}
::: {.r .g}
::: {.pr .ps .r .ki}
[]{.r .pt .al .pu}

::: {.r .s .pv .pw}
[![Christophe
Porteneuve](https://miro.medium.com/fit/c/160/160/0*E5E12sAhnnsMPeAF.png){.r
.fl .px .py width="80"
height="80"}](/@porteneuve?source=follow_footer--------------------------follow_footer-)
:::

[]{.r}

::: {.pz .r .qa}
Written by
:::

::: {.pz .qd .n .qa}
::: {.ai .n .o .fh}
[Christophe Porteneuve](/@porteneuve?source=follow_footer--------------------------follow_footer-){.bx .by .bg .bh .bi .bj .bk .bl .bm .bn .bz .ca .bq .br .cb .cc} {#christophe-porteneuve .cd .hz .qe .qf .ap}
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

::: {.r .g}
Follow
:::
:::
:::

::: {.pz .qq .r .qa .bb}
::: {.qr .r}
#### I make cool stuff and teach others to (Git, Rails, JS/CoffeeScript/Node/etc). {#i-make-cool-stuff-and-teach-others-to-git-rails-jscoffeescriptnodeetc. .cd .ep .qs .qt .ci}
:::

::: {.ba .qu .bb}
Follow
:::
:::
:::
:::

::: {.ba .bb}
::: {.qv .r}
::: {.n .og}
::: {.qw .r}
[![Christophe
Porteneuve](https://miro.medium.com/fit/c/80/80/0*E5E12sAhnnsMPeAF.png){.r
.fl .qx .qy width="40"
height="40"}](/@porteneuve?source=follow_footer--------------------------follow_footer-)
:::

::: {.fo .r}
Written by

::: {.n .og}
[Christophe Porteneuve](/@porteneuve?source=follow_footer--------------------------follow_footer-){.bx .by .bg .bh .bi .bj .bk .bl .bm .bn .bz .ca .bq .br .cb .cc} {#christophe-porteneuve-1 .cd .hz .qs .cf .ap}
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

::: {.fo .r}
Follow
:::
:::

::: {.rb .r}
#### I make cool stuff and teach others to (Git, Rails, JS/CoffeeScript/Node/etc). {#i-make-cool-stuff-and-teach-others-to-git-rails-jscoffeescriptnodeetc.-1 .cd .ep .fs .cf .ci}
:::
:::
:::
:::
:::
:::

::: {.rc .po .r .pq .rd .y}
[[]{.ja .re
.nj}](https://medium.com/p/4fa1a48c53aa/responses/show?source=follow_footer--------------------------follow_footer-){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .bz .ca .bq .br .cb .cc}

::: {.li .rf .gl .r .ky .bb}
[See responses (19)]{.be}
:::
:::
:::
:::

::: {.rg .r .rh .y}
::: {.n .p}
::: {.z .ab .ac .ae .af .ag .ah .ai}
::: {.ri .rj .r}
::: {.rk .rl .rm .rj .r .rn .ro}
More From Medium {#more-from-medium .cd .hz .rp .ht .rq .hu .rr .rs .rt .ru .rv .rw .ap}
----------------
:::

::: {.rx .n .og .ny .ry .rz .sa .sb .sc .sd .se .sf .sg .sh .si .sj .sk .sl .sm}
::: {.sn .so .sp .sq .sr .ss .st .su .sv .sw .sx .sy .sz .ta .tb .tc .td .te .tf .tg .th}
::: {.ti .tj .r}
::: {.ai .km}
::: {.n .fh}
::: {.r .tk .tl .tm .ok}
::: {.tn .r}
[Writing Your Own Changelog Generator with Git](/better-programming/create-your-own-changelog-generator-with-git-aefda291ea93?source=post_internal_links---------0------------------) {#writing-your-own-changelog-generator-with-git .cd .hz .to .tp .tq .tr .ts .tt .tu .tv .tw .tx .ap}
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
:::

::: {.o .n}
<div>

</div>

::: {.ai .r}
::: {.n}
::: {style="flex:1"}
[]{.cd .b .ce .cf .cg .ch .r .ap .q}

::: {.ck .n .o .fr}
[[Jacky
Efendi](/@jackyef?source=post_internal_links---------0------------------){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .fv .bq .br .cb .cc} in [Better
Programming](/better-programming?source=post_internal_links---------0------------------){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .fv .bq .br .cb .cc}]{.cd .ep .gn
.cf .ap}
:::
:::
:::
:::
:::
:::

::: {.fo .hd .r .oj .ty}
[](/better-programming/create-your-own-changelog-generator-with-git-aefda291ea93?source=post_internal_links---------0------------------){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .bz .ca .bq .br .cb .cc .r}

::: {.kp .r .ki .kq}
::: {.tz .ks .r}
::: {.kk .kl .s .t .u .km .ai .av .kn .ko}
![](https://miro.medium.com/max/60/0*s1Kr_0A-w5ZCES9A?q=20){.s .t .u .km
.ai .kt .ku .kv width="70" height="70"}
:::

![](https://miro.medium.com/fit/c/140/140/0*s1Kr_0A-w5ZCES9A){.ua .ub
.uc .ud .ue .uf .ug .uh .ui .uj width="70" height="70" sizes="70px"
srcset="https://miro.medium.com/fit/c/96/140/0*s1Kr_0A-w5ZCES9A 48w, https://miro.medium.com/fit/c/140/140/0*s1Kr_0A-w5ZCES9A 70w"}
:::
:::
:::
:::
:::
:::
:::

::: {.sn .so .sp .sq .sr .ss .st .su .sv .sw .sx .sy .sz .ta .tb .tc .td .te .tf .tg .th}
::: {.ti .tj .r}
::: {.ai .km}
::: {.n .fh}
::: {.r .tk .tl .tm .ok}
::: {.tn .r}
[13 Tips for Writing Useful Unit Tests](/better-programming/13-tips-for-writing-useful-unit-tests-ca20706b5368?source=post_internal_links---------1------------------) {#tips-for-writing-useful-unit-tests .cd .hz .to .tp .tq .tr .ts .tt .tu .tv .tw .tx .ap}
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
:::

::: {.o .n}
<div>

</div>

::: {.ai .r}
::: {.n}
::: {style="flex:1"}
[]{.cd .b .ce .cf .cg .ch .r .ap .q}

::: {.ck .n .o .fr}
[[Nick
Hodges](/@nickhodges?source=post_internal_links---------1------------------){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .fv .bq .br .cb .cc} in [Better
Programming](/better-programming?source=post_internal_links---------1------------------){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .fv .bq .br .cb .cc}]{.cd .ep .gn
.cf .ap}
:::
:::
:::
:::
:::
:::

::: {.fo .hd .r .oj .ty}
[](/better-programming/13-tips-for-writing-useful-unit-tests-ca20706b5368?source=post_internal_links---------1------------------){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .bz .ca .bq .br .cb .cc .r}

::: {.kp .r .ki .kq}
::: {.tz .ks .r}
::: {.kk .kl .s .t .u .km .ai .av .kn .ko}
![](https://miro.medium.com/max/60/1*dCH9EIxT6lh3M_MiZuD3Rg.jpeg?q=20){.s
.t .u .km .ai .kt .ku .kv width="70" height="70"}
:::

![](https://miro.medium.com/fit/c/140/140/1*dCH9EIxT6lh3M_MiZuD3Rg.jpeg){.ua
.ub .uc .ud .ue .uf .ug .uh .ui .uj width="70" height="70" sizes="70px"
srcset="https://miro.medium.com/fit/c/96/140/1*dCH9EIxT6lh3M_MiZuD3Rg.jpeg 48w, https://miro.medium.com/fit/c/140/140/1*dCH9EIxT6lh3M_MiZuD3Rg.jpeg 70w"}
:::
:::
:::
:::
:::
:::
:::

::: {.sn .so .sp .sq .sr .ss .st .su .sv .sw .sx .sy .sz .ta .tb .tc .td .te .tf .tg .th}
::: {.ti .tj .r}
::: {.ai .km}
::: {.n .fh}
::: {.r .tk .tl .tm .ok}
::: {.tn .r}
[Github Templates: The Smarter Way to Formalize Pull Requests Among Development Teams](/better-programming/github-templates-the-smarter-way-to-formalize-pull-requests-among-development-teams-89f8d6a204f?source=post_internal_links---------2------------------) {#github-templates-the-smarter-way-to-formalize-pull-requests-among-development-teams .cd .hz .to .tp .tq .tr .ts .tt .tu .tv .tw .tx .ap}
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
:::

::: {.o .n}
<div>

</div>

::: {.ai .r}
::: {.n}
::: {style="flex:1"}
[]{.cd .b .ce .cf .cg .ch .r .ap .q}

::: {.ck .n .o .fr}
[[Paige
Niedringhaus](/@paigen11?source=post_internal_links---------2------------------){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .fv .bq .br .cb .cc} in [Better
Programming](/better-programming?source=post_internal_links---------2------------------){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .fv .bq .br .cb .cc}]{.cd .ep .gn
.cf .ap}
:::
:::
:::
:::
:::
:::

::: {.fo .hd .r .oj .ty}
[](/better-programming/github-templates-the-smarter-way-to-formalize-pull-requests-among-development-teams-89f8d6a204f?source=post_internal_links---------2------------------){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .bz .ca .bq .br .cb .cc .r}

::: {.kp .r .ki .kq}
::: {.tz .ks .r}
::: {.kk .kl .s .t .u .km .ai .av .kn .ko}
![](https://miro.medium.com/max/60/1*T2599X6HCREZXkYc6UQL2A.jpeg?q=20){.s
.t .u .km .ai .kt .ku .kv width="70" height="70"}
:::

![](https://miro.medium.com/fit/c/140/140/1*T2599X6HCREZXkYc6UQL2A.jpeg){.ua
.ub .uc .ud .ue .uf .ug .uh .ui .uj width="70" height="70" sizes="70px"
srcset="https://miro.medium.com/fit/c/96/140/1*T2599X6HCREZXkYc6UQL2A.jpeg 48w, https://miro.medium.com/fit/c/140/140/1*T2599X6HCREZXkYc6UQL2A.jpeg 70w"}
:::
:::
:::
:::
:::
:::
:::

::: {.sn .so .sp .sq .sr .ss .st .su .sv .sw .sx .sy .sz .ta .tb .tc .td .te .tf .tg .th}
::: {.ti .tj .r}
::: {.ai .km}
::: {.n .fh}
::: {.r .tk .tl .tm .ok}
::: {.tn .r}
[How to merge two PowerPoint PPTX files together in Python](/@cloudmersive/how-to-merge-two-powerpoint-pptx-files-together-in-python-10b6609d62cb?source=post_internal_links---------3------------------) {#how-to-merge-two-powerpoint-pptx-files-together-in-python .cd .hz .to .tp .tq .tr .ts .tt .tu .tv .tw .tx .ap}
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
:::

::: {.o .n}
<div>

</div>

::: {.ai .r}
::: {.n}
::: {style="flex:1"}
[]{.cd .b .ce .cf .cg .ch .r .ap .q}

::: {.ck .n .o .fr}
[[Cloudmersive](/@cloudmersive?source=post_internal_links---------3------------------){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .fv .bq .br .cb .cc}]{.cd .ep .gn
.cf .ap}
:::
:::
:::
:::
:::
:::

::: {.fo .hd .r .oj .ty}
[](/@cloudmersive/how-to-merge-two-powerpoint-pptx-files-together-in-python-10b6609d62cb?source=post_internal_links---------3------------------){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .bz .ca .bq .br .cb .cc .r}

::: {.kp .r .ki .kq}
::: {.tz .ks .r}
::: {.kk .kl .s .t .u .km .ai .av .kn .ko}
![](https://miro.medium.com/max/60/1*m8RgjMeoSQu3UGKfIAoinA.jpeg?q=20){.s
.t .u .km .ai .kt .ku .kv width="70" height="70"}
:::

![](https://miro.medium.com/fit/c/140/140/1*m8RgjMeoSQu3UGKfIAoinA.jpeg){.ua
.ub .uc .ud .ue .uf .ug .uh .ui .uj width="70" height="70" sizes="70px"
srcset="https://miro.medium.com/fit/c/96/140/1*m8RgjMeoSQu3UGKfIAoinA.jpeg 48w, https://miro.medium.com/fit/c/140/140/1*m8RgjMeoSQu3UGKfIAoinA.jpeg 70w"}
:::
:::
:::
:::
:::
:::
:::

::: {.sn .so .sp .sq .sr .ss .st .su .sv .sw .sx .sy .sz .ta .tb .tc .td .te .tf .tg .th}
::: {.ti .tj .r}
::: {.ai .km}
::: {.n .fh}
::: {.r .tk .tl .tm .ok}
::: {.tn .r}
[Creating A Github Action to Tag Commits](https://itnext.io/creating-a-github-action-to-tag-commits-2722f1560dec?source=post_internal_links---------4------------------) {#creating-a-github-action-to-tag-commits .cd .hz .to .tp .tq .tr .ts .tt .tu .tv .tw .tx .ap}
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
:::

::: {.o .n}
<div>

</div>

::: {.ai .r}
::: {.n}
::: {style="flex:1"}
[]{.cd .b .ce .cf .cg .ch .r .ap .q}

::: {.ck .n .o .fr}
[[Nick
Sjostrom](/@nick.sjostrom12?source=post_internal_links---------4------------------){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .fv .bq .br .cb .cc} in
[ITNEXT](https://itnext.io/?source=post_internal_links---------4------------------){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .fv .bq .br .cb .cc}]{.cd .ep .gn
.cf .ap}
:::
:::
:::
:::
:::
:::

::: {.fo .hd .r .oj .ty}
[](https://itnext.io/creating-a-github-action-to-tag-commits-2722f1560dec?source=post_internal_links---------4------------------){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .bz .ca .bq .br .cb .cc .r}

::: {.kp .r .ki .kq}
::: {.tz .ks .r}
::: {.kk .kl .s .t .u .km .ai .av .kn .ko}
![](https://miro.medium.com/max/60/1*_4Ex1uUhL93a3bHyC-TgPg.png?q=20){.s
.t .u .km .ai .kt .ku .kv width="70" height="70"}
:::

![](https://miro.medium.com/fit/c/140/140/1*_4Ex1uUhL93a3bHyC-TgPg.png){.ua
.ub .uc .ud .ue .uf .ug .uh .ui .uj width="70" height="70" sizes="70px"
srcset="https://miro.medium.com/fit/c/96/140/1*_4Ex1uUhL93a3bHyC-TgPg.png 48w, https://miro.medium.com/fit/c/140/140/1*_4Ex1uUhL93a3bHyC-TgPg.png 70w"}
:::
:::
:::
:::
:::
:::
:::

::: {.sn .so .sp .sq .sr .ss .st .su .sv .sw .sx .sy .sz .ta .tb .tc .td .te .tf .tg .th}
::: {.ti .tj .r}
::: {.ai .km}
::: {.n .fh}
::: {.r .tk .tl .tm .ok}
::: {.tn .r}
[The 5 unit testing guidelines](/@abstarreveld/the-5-unit-testing-guidelines-f21d39c33e0b?source=post_internal_links---------5------------------) {#the-5-unit-testing-guidelines .cd .hz .to .tp .tq .tr .ts .tt .tu .tv .tw .tx .ap}
-------------------------------------------------------------------------------------------------------------------------------------------------
:::

::: {.o .n}
<div>

</div>

::: {.ai .r}
::: {.n}
::: {style="flex:1"}
[]{.cd .b .ce .cf .cg .ch .r .ap .q}

::: {.ck .n .o .fr}
[[Albert
Starreveld](/@abstarreveld?source=post_internal_links---------5------------------){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .fv .bq .br .cb .cc}]{.cd .ep .gn
.cf .ap}
:::
:::
:::
:::
:::
:::

::: {.fo .hd .r .oj .ty}
[](/@abstarreveld/the-5-unit-testing-guidelines-f21d39c33e0b?source=post_internal_links---------5------------------){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .bz .ca .bq .br .cb .cc .r}

::: {.kp .r .ki .kq}
::: {.tz .ks .r}
::: {.kk .kl .s .t .u .km .ai .av .kn .ko}
![](https://miro.medium.com/max/60/1*ti9yAOncG-9rEJC9GRD4cA.png?q=20){.s
.t .u .km .ai .kt .ku .kv width="70" height="70"}
:::

![](https://miro.medium.com/fit/c/140/140/1*ti9yAOncG-9rEJC9GRD4cA.png){.ua
.ub .uc .ud .ue .uf .ug .uh .ui .uj width="70" height="70" sizes="70px"
srcset="https://miro.medium.com/fit/c/96/140/1*ti9yAOncG-9rEJC9GRD4cA.png 48w, https://miro.medium.com/fit/c/140/140/1*ti9yAOncG-9rEJC9GRD4cA.png 70w"}
:::
:::
:::
:::
:::
:::
:::

::: {.sn .so .sp .sq .sr .ss .st .su .sv .sw .sx .sy .sz .ta .tb .tc .td .te .tf .tg .th}
::: {.ti .tj .r}
::: {.ai .km}
::: {.n .fh}
::: {.r .tk .tl .tm .ok}
::: {.tn .r}
[Lean Testing or Why Unit Tests are Worse than You Think](https://blog.usejournal.com/lean-testing-or-why-unit-tests-are-worse-than-you-think-b6500139a009?source=post_internal_links---------6------------------) {#lean-testing-or-why-unit-tests-are-worse-than-you-think .cd .hz .to .tp .tq .tr .ts .tt .tu .tv .tw .tx .ap}
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
:::

::: {.o .n}
<div>

</div>

::: {.ai .r}
::: {.n}
::: {style="flex:1"}
[]{.cd .b .ce .cf .cg .ch .r .ap .q}

::: {.ck .n .o .fr}
[[Eugen
Kiss](/@eugenkiss?source=post_internal_links---------6------------------){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .fv .bq .br .cb .cc} in [Noteworthy
- The Journal
Blog](https://blog.usejournal.com/?source=post_internal_links---------6------------------){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .fv .bq .br .cb .cc}]{.cd .ep .gn
.cf .ap}
:::
:::
:::
:::
:::
:::

::: {.fo .hd .r .oj .ty}
[](https://blog.usejournal.com/lean-testing-or-why-unit-tests-are-worse-than-you-think-b6500139a009?source=post_internal_links---------6------------------){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .bz .ca .bq .br .cb .cc .r}

::: {.kp .r .ki .kq}
::: {.tz .ks .r}
::: {.kk .kl .s .t .u .km .ai .av .kn .ko}
![](https://miro.medium.com/max/60/1*8c333d_YNEHG4q3UDb1wTA.jpeg?q=20){.s
.t .u .km .ai .kt .ku .kv width="70" height="70"}
:::

![](https://miro.medium.com/fit/c/140/140/1*8c333d_YNEHG4q3UDb1wTA.jpeg){.ua
.ub .uc .ud .ue .uf .ug .uh .ui .uj width="70" height="70" sizes="70px"
srcset="https://miro.medium.com/fit/c/96/140/1*8c333d_YNEHG4q3UDb1wTA.jpeg 48w, https://miro.medium.com/fit/c/140/140/1*8c333d_YNEHG4q3UDb1wTA.jpeg 70w"}
:::
:::
:::
:::
:::
:::
:::

::: {.sn .so .sp .sq .sr .ss .st .su .sv .sw .sx .sy .sz .ta .tb .tc .td .te .tf .tg .th}
::: {.ti .tj .r}
::: {.ai .km}
::: {.n .fh}
::: {.r .tk .tl .tm .ok}
::: {.tn .r}
[Top 3 git commit history issues and how to solve them simply and quickly](/expend-engineering/top-3-git-commit-history-issues-and-how-to-solve-them-simply-and-quickly-335812541570?source=post_internal_links---------7------------------) {#top-3-git-commit-history-issues-and-how-to-solve-them-simply-and-quickly .cd .hz .to .tp .tq .tr .ts .tt .tu .tv .tw .tx .ap}
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
:::

::: {.o .n}
<div>

</div>

::: {.ai .r}
::: {.n}
::: {style="flex:1"}
[]{.cd .b .ce .cf .cg .ch .r .ap .q}

::: {.ck .n .o .fr}
[[Rosen
Toshev](/@toshev?source=post_internal_links---------7------------------){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .fv .bq .br .cb .cc} in [Expend
Engineering](/expend-engineering?source=post_internal_links---------7------------------){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .fv .bq .br .cb .cc}]{.cd .ep .gn
.cf .ap}
:::
:::
:::
:::
:::
:::

::: {.fo .hd .r .oj .ty}
[](/expend-engineering/top-3-git-commit-history-issues-and-how-to-solve-them-simply-and-quickly-335812541570?source=post_internal_links---------7------------------){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .bz .ca .bq .br .cb .cc .r}

::: {.kp .r .ki .kq}
::: {.tz .ks .r}
::: {.kk .kl .s .t .u .km .ai .av .kn .ko}
![](https://miro.medium.com/max/60/1*0sy0w841AyO1mDsvDw7ZfA.png?q=20){.s
.t .u .km .ai .kt .ku .kv width="70" height="70"}
:::

![](https://miro.medium.com/fit/c/140/140/1*0sy0w841AyO1mDsvDw7ZfA.png){.ua
.ub .uc .ud .ue .uf .ug .uh .ui .uj width="70" height="70" sizes="70px"
srcset="https://miro.medium.com/fit/c/96/140/1*0sy0w841AyO1mDsvDw7ZfA.png 48w, https://miro.medium.com/fit/c/140/140/1*0sy0w841AyO1mDsvDw7ZfA.png 70w"}
:::
:::
:::
:::
:::
:::
:::
:::
:::
:::
:::
:::
:::

</div>

::: {.uk .r .db .ul}
::: {.section .co .cp .ai .cr .r .um .un .uo .up .uq .ur .us .ut .uu .uv .uw .ux .uy .uz .va}
::: {.vb .vc .pr .n .fh .g}
::: {.vd .n .fh}
::: {.ve .r .vf}
::: {.vg .r}
[](/about?autoplay=1&source=post_page-----4fa1a48c53aa----------------------){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .vh .vi .bq .br .vj .vk}

#### Discover Medium {#discover-medium .vl .vm .vn .cd .hz .ce .qt .vo .vp .r}
:::

[Welcome to a place where words matter. On Medium, smart voices and
original ideas take center stage - with no ads in sight.
[Watch](/about?autoplay=1&source=post_page-----4fa1a48c53aa----------------------){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .bq .br .vj .vk .vr}]{.cd .b .ce .cf
.cg .ch .r .vq .fp}
:::

::: {.ve .r .vf}
::: {.tn .r}
[](https://medium.com/topics?source=post_page-----4fa1a48c53aa----------------------){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .vh .vi .bq .br .vj .vk}

#### Make Medium yours {#make-medium-yours .vl .vm .vn .cd .hz .ce .qt .vo .vp .r}
:::

[Follow all the topics you care about, and we'll deliver the best
stories for you to your homepage and inbox.
[Explore](https://medium.com/topics?source=post_page-----4fa1a48c53aa----------------------){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .bq .br .vj .vk .vr}]{.cd .b .ce .cf
.cg .ch .r .vq .fp}
:::

::: {.ve .r .vf}
::: {.vg .r}
[](/membership?source=post_page-----4fa1a48c53aa----------------------){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .vh .vi .bq .br .vj .vk}

#### Become a member {#become-a-member .vl .vm .vn .cd .hz .ce .qt .vo .vp .r}
:::

[Get unlimited access to the best stories on Medium --- and support
writers while you're at it. Just \$5/month.
[Upgrade](/membership?source=post_page-----4fa1a48c53aa----------------------){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .bq .br .vj .vk .vr}]{.cd .b .ce .cf
.cg .ch .r .vq .fp}
:::
:::
:::

::: {.n .mx}
::: {.n .o .fh}
[]{.cd .b .ce .cf .cg .ch .r .vq .fp}

::: {.rb .vs .n .fh .vt .al}
#### [About](/about?autoplay=1&source=post_page-----4fa1a48c53aa----------------------){.bx .by .bg .bh .bi .bj .bk .bl .bm .bn .fv .bq .br .vj .vk} {#about .cd .ep .qs .qt .vl}

#### [Help](https://help.medium.com/?source=post_page-----4fa1a48c53aa----------------------){.bx .by .bg .bh .bi .bj .bk .bl .bm .bn .fv .bq .br .vj .vk} {#help .cd .ep .qs .qt .vl}

#### [Legal](/policy/9db0094a1e0f?source=post_page-----4fa1a48c53aa----------------------){.bx .by .bg .bh .bi .bj .bk .bl .bm .bn .fv .bq .br .vj .vk} {#legal .cd .ep .qs .qt .vl}
:::
:::

::: {.ba .vu .vv .al}
#### Get the Medium app {#get-the-medium-app .cd .ep .qs .qt .vq}
:::

::: {.ba .vu .vw .al .vx}
::: {.vy .r}
[![A button that says \'Download on the App Store\', and if clicked it
will lead you to the iOS App
store](https://miro.medium.com/max/270/1*M2FVPPidy2x386MRAE-EeA.png){width="135"
height="41"}](https://itunes.apple.com/app/medium-everyones-stories/id828256236?pt=698524&mt=8&ct=post_page&source=post_page-----4fa1a48c53aa----------------------){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .vh .vi .bq .br .vj .vk}
:::

::: {.r}
[![A button that says \'Get it on, Google Play\', and if clicked it will
lead you to the Google Play
store](https://miro.medium.com/max/270/1*HyH8oIcJvXp7xzu5oF6dTg.png){width="135"
height="41"}](https://play.google.com/store/apps/details?id=com.medium.reader&source=post_page-----4fa1a48c53aa----------------------){.bx
.by .bg .bh .bi .bj .bk .bl .bm .bn .vh .vi .bq .br .vj .vk}
:::
:::
:::
:::
:::
:::
:::

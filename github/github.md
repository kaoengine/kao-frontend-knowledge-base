Git collaboration and submission specifications
======

### Foreword
In modern software development, especially in the team collaborative development process and code management in the enterprise, git has played an indispensable role. This chapter will describe how to use git to perform some basic version control operations and git use process management and submission specifications in team collaboration.

The Git workflow and branch management specification is an introduction and specification of the git team collaboration process in the enterprise level. You will learn the role of git in the software development life cycle in team development.
The Git submission specification summarizes the specification requirements for the commit information recorded in the code during git use.

### Git quick start

#### A brief introduction to Git

Git is a tool for controlling the historical version of management code. Unlike centralized SVN, Git uses a distributed management method.

!(Git's distributed version management)[https://media.geeksforgeeks.org/wp-content/uploads/20190624140226/distvcs.png]

Person team has its own local repository, not only their own local version management, code versions can also be shared among the various members.

#### Initialize a local repository

Before starting the operation, make sure that Git is installed on your system environment. Git downloads for each system environment are available on https://git-scm.com .
Before using the git command to operate, you need a git repository, you can move to your working directory, execute on the command line:

```text
$ git  init
Initialized empty Git repository in /path/to/work/directory/.git/
```
> This way you can get a local repository and you will see that a .git directory has been added to the working directory.
> Note: In some systems, folders beginning with. May be hidden by default. You may need to enable related settings to see

#### Clone remote repository

```text
$ git clone <remote address>
```

The above command will clone the remote repository pointed to by the link to the local, so you also get a git repository, and this repository is associated with the remote repository, if you have the authority of the remote repository, you can push your submit.

#### View repository status

```text
$ git  status
On  branch  master

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```
> Check the status of the current repository (or code branch) through git status.

#### Track file modifications

Next we can add some files to this repository and execute it in the working directory:

```text
 touch index.js
```

The above instruction creates a file named index.js in the working directory. Using git status, you can see that an index.js file has been added. Let's write some content in this file:

```text
$ echo "console.log('learning git!');" > index.js
```

The above instruction writes the content of "console.log('learning git!')" into the index.js file for us. At this time, check the repository status as follows:

```text
$ git  status
On  branch  master

No commits yet

Untracked files:
    (use "git add <file>..." to include in what will be commited)
    
        index.js
nothing added to commit but untracked files present(use "git add" to track)
```

You can see the information feedback that the index.js file is untracked ( Untracked files ), and in git, if a file requires git for version control and content modification tracking, then you need to add it to the git repository first In the staging area ( stage ). To add a file to the temporary storage area, just execute:

```text
$ git add index.js
```

!(Move the modification of the working area to the temporary storage area by the add command)[https://cdn.nlark.com/yuque/0/2019/png/199677/1547711556978-9d79b950-934e-463c-9e90-cf70dd02a060.png]

I believe that many people will be used to using git directly when adding or modifying files

```text
$ git  add  .
```

Directly add all the modified files in the current directory to the staging area ( stage ). In general, this method is convenient and fast, but I still recommend to use git status command to check what the repository is before executing git add The file has been modified. This is because if you use the submodule function of git in your repository, directly git add. The commit ID of the submodule will also be added to the staging area. In case the commit of this commit ID is not Your original intention, then submitting to the remote may cause sub-module disorder.
In order to develop good habits, it is best to use git status to check the repository status before git add .

#### Submitted file revision history information

Through git add we have added the operations on the file (add or modify, delete, etc.) to the temporary area ( stage ), but this is not enough, we also need to record this operation as a history record:

```text
$ git commit -m "Add a file named index.js"
[master (root-commit) 910f65f] Add a file named index.js

1 file changed, 1 insertion(+)
create mode 100644 index.js
```
In this way, we generate a historical record of the operation of the file, and the historical record can be viewed through git log . The commit information without committing the -m parameter directly will be edited using the vim editor by default (for the operation of the vim editor, please see the following chapters). For the commit record, in principle, we should keep the changes recorded in each commit pure and single, such as the case where the fixes for two bugs are submitted to a commit, so that once the fix of bug A will cause another problem, But bug B's repair is not a problem. If you roll back the commit at this time, although the bug A's submission is rolled back, the bug B's repair work is also lost.

!(Store the changes in the temporary storage area to the history library through the commit command)[https://cdn.nlark.com/yuque/0/2019/png/199677/1547711591808-dc465940-7d09-4c2b-b87a-66bd2e25fe0c.png?x-oss-process=image%2Fresize%2Cw_687]

>Note: The author does not recommend the operation of commit -m, because it does not comply with the submission specification, here is to briefly explain the use of commit, please see the following chapters for details

#### A brief introduction to the Vim editor

Using the git commit command will use the vim editor to write the commit information by default. At the same time, the author does not recommend using git commit -m to submit the information, because the submitted commit information written in this way does not meet the specifications, and can only explain some short information or even Directly empty, especially empty information is not allowed. So here will briefly introduce the basic usage of vim, interested readers can search for relevant vim learning materials for in-depth study.
When you use the add command to add the file modification to the cache area, you can use git commit and then press Enter. Then you will enter the vim editor interface, and you will see information similar to the following on the interface:

```text
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Committer: shawn <qtran@.local>
#
# On branch master
# Changes to be committed:
#       modified:   index.js
#
~
~
"~/path/to/working/directory/git-learning/.git/COMMIT_EDITMSG" 10L, 274C
```
The information starting with # is a comment, don't worry about adding them to your submission information, and if you exit without filling in the information, the commit will be interrupted.

**Insert mode**
Next, when you need to fill in the data, you need to press the "i" key to enter the insert mode, you can only insert and write the text after entering the insert mode, and then you can write what you want to fill in similar to the general editor information.
When you finish writing the message, you need to exit the insert mode and return to the original normal mode. To exit the insert mode, you only need to press the "esc" key.

**Command mode**

When you want to exit the vim editor, we need to enter the command mode, enter : in the normal mode , enter the command mode, enter wq to enter, you can save and exit the editor, here are some common commands for your reference:

```text
:q exit
:q! Force exit without saving
:wq save and exit
:wq! Force save and exit
```

#### Use branch
The branch function is one of git's most powerful functions, which allows you to develop concurrently in multiple scenarios. And it allows you to develop different functions at the same time without conflict, for distinguishing functions or versions.
In the enterprise, when a large-scale development team develops functions, it is impossible for everyone to develop on one branch, because this may require continuous resolution of conflicts. In addition, functions and functions are usually independent of each other and developed on the same branch. This is unreasonable.
You can execute the following command to create a branch:

```text
$ git branch <branch-name>
```

For example, if you execute the git branch test command to create a branch, you actually create a pointer named test that points to the commit node:

!(Create a branch named test)[https://cdn.nlark.com/yuque/0/2019/png/199677/1547711624226-97eafbf3-ad2d-47f9-950d-fdbf5a186751.png]

#### Switch between different scenes
In daily development, we may often need to switch to different development scenarios, such as you are developing on a functional branch, but the product manager or test suddenly requires you to see a problem in the online environment, so you need to copy your current code To switch to the online environment code, when you need to switch branches, you can:

```text
$ git checkout <branch-name>|<tag>|<commit hash id>
```

The above is just one of the usage scenarios of git checkout. Checkout can not only switch branches, but also switch tags, or commit hash id and other environment codes. For example, if you need to switch to the test branch created above, then you need to execute the git checkout test instruction. In git, the Head pointer is used to point to the current commit record, and the checkout command actually points the git head pointer to test. This pointer:

!(Change the current working branch from the master branch to the test branch)[https://cdn.nlark.com/yuque/0/2019/png/199677/1547711643701-5f5d0274-1e96-4996-97ad-bd5b6fa0cd72.png]

Then the current working branch is the `test` branch. Here you will understand that the essence of the checkout command is actually to move the git Head pointer.
Of course, the direct checkout may not be able to switch smoothly in the past, because your work area does not commit the modification of certain files, and git will prevent you from branch switching, reminding you to commit the file modification first, and the relevant commit submission operation You can do it as in the previous chapter, but if you don’t want to commit for some other reason. For example, this part of the modification does not satisfy a commit or these are experimental codes, so you can "storage" the current workspace modification. :

```text
$ git  stash
```
The git stash command can save the current code for you, and push these changes into a stack, in other words, you can stash multiple times.
Then when you solve the problem and want to return to the original working code environment, you only need to switch to the original branch and proceed:

```text
$ git  stash  pop
```

Here, the code on the top of the stack (that is, the code of the latest stash) will be used to modify the record and reflect it to your workspace.

#### Git team basic model

In the actual software development process, the team battle scenario is far more than the individual soldier battle, so it is not enough to master the git command in the above chapter for operating your own local repository. We'll need a remote centralized repository.The so-called centralized repository means that all the code in the team is uploaded to this place for storage. With a centralized repository, it is easy to share and collaborate on results.

#### Add remote repository address

If you have used git init to initialize a git repository, and you want to put your work on a remote repository to prepare for possible multi-person collaboration, you need to add a remote connection to your local repository. That is to say, store the history library of your local warehouse in a remote server's warehouse:
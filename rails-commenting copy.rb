# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# 1) we start by establishing the class of BlogPost Action Controller.  It holds objects that store arguments and methods that we can call upon through our database.  This controller is responsible for routing external requests to internal actions.
class BlogPostsController < ApplicationController
  def index
    # 2)the index action is going to render a template to our views folder so, when a request is sent, we can view all Blog Posts in our html.erb views file.
    @posts = BlogPost.all
  end

  def show
    # 3) the show action returns a call to view a specific blog post based on the id it's assigned to.
    @post = BlogPost.find(params[:id])
  end

  # 4) the new method is a method that can be called on the front end, and rails will then then create an instance of BlogPOst controller and run this 'new' method ti display a template to create a new blog post
  def new
    @post = Post.new
  end

  def create
    # 5)this method in in charge of the action to create that 'new' request which is then stored into the database.  The conditional is saying that if all requirements are met, we can then be redirected to the landing page which should diasplay the new blogpost that was created, else if this fails and conditions are not met, the same page with be renderred again. We can also edit a specific blog post, and update will submit that edit, making sure that all the changes that were made stay there, and are displayed.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # 6) here we are establishing that if all conditions are met and the parameters have been filled, we redirect yo the landing page without our editted blogpost being displayed onto the, else we stay on our "edit_blog_post_path" which means we stay on the same page as we were when we were editing our blog post.  We also have the "destroy" method, which allows us to delete speciific blog posts that we wish to target.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 7) if action fails, we are redirected back to the landing page.
      redirect_to blog_post_path(@post)
    end
  end

  # 8) "private" means that the method below stays local to this controller specifically.  We are then going to establish the standards that need to be met in order for a blog post to qualify as a blog post.
  private
  def blog_post_params
    # 9) Those standards are that a blog post must have a title, and it must hold content.
    params.require(:blog_post).permit(:title, :content)
  end

end


# FILE: app/models/blog_post.rb

class BlogPost < ApplicationRecord
  # 10) This is model association.  A blod post can have many comments that belong to it.
  has_many :comments
end

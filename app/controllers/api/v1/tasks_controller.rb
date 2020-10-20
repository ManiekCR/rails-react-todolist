class Api::V1::TasksController < ApplicationController
  skip_before_action :verify_authenticity_token

  # skip_before_action :authenticate_user!, only: [ :index, :show, :create, :destroy ]
  before_action :set_task, only: [ :show, :destroy ]

  def index
    tasks = Task.all
    render json: tasks
    # tasks.each do | t |
    #   render :json => {
    #     id: t.id,
    #     content: t.content,
    #     status: t.status
    #   }
    # end
  end

  def show
    render json: @task
  end

  def create
    @task = Task.new(task_params)
    @task.user = current_user
    # # authorize @task
    if @task.save
      render json: @task, status: :created
    else
      render_error
    end
  end

  def destroy
    @task.destroy
    head :no_content
  end

  private

  def set_task
    @task = Task.find(params[:id])
  end

  def task_params
    params.permit(:content)
  end

  def render_error
    render json: { errors: @task.errors.full_messages },
      status: :unprocessable_entity
  end
end

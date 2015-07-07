class InvestorsController < ApplicationController
  def index
  end

  def reg
    @investor = Investor.new
  end

  def create
    @investor = Investor.create(investor_params)
    redirect_to investors_submit_info_path, notice: '提交成功'
  end

  def ban
  end

  def pass
  end

  def submit_info
    
  end

  private

  def investor_params
    params.require(:investor).permit(:name, :company, :position, :mobile, :used_be_part_in, :plan_to_pay)
  end

end

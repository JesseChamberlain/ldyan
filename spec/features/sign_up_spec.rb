require 'rails_helper'

feature 'sign up' , %Q{
    As an unauthenticated user
    I want to sign up
    So that I can contribute to and modify songs
  } do

  xscenario 'specifying valid and required information' do
    visit root_path
    click_link 'Sign Up'
    fill_in 'First Name', with: 'Jon'
    fill_in 'Last Name', with: 'Smith'
    fill_in 'Email', with: 'jon@smith.com'
    fill_in 'Username', with: 'bill'
    fill_in 'user_password', with: 'password'
    fill_in 'Password Confirmation', with: 'password'
    click_button 'Sign Up'

    expect(page).to have_content("Sign Out")
  end

  scenario 'required information is not supplied' do
    visit root_path
    click_link 'Sign Up'
    click_button 'Sign Up'

    expect(page).to have_content("can't be blank")
    expect(page).to_not have_content("Sign Out")

  end

  xscenario 'password confirmation does not match confirmation' do
    visit root_path
    click_link 'Sign Up'

    fill_in 'user_password', with: 'password'
    fill_in 'Password Confirmation', with: 'wahtever'

    click_button 'Sign Up'

    expect(page).to have_content("confirmation doesn't match")
    expect(page).to_not have_content("Sign Out")
  end
end

import React, { useEffect, useMemo, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import IMAGES from '../../images'
import { useDispatch, useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import { selectSearch, toggleSearch } from '../../store/slices/search/searchSlice'
import { selectPosts } from '../../store/slices/posts/postsSlice'


function Navbar() {

  const { currentUser } = useSelector(selectUsers)
  const search  = useSelector(selectSearch)
  const users = useSelector(selectUsers)
  const dispatch = useDispatch()
  const { pathname } = useLocation()


  const filteredUsers= useMemo(() => {
    return users.usersData
      .filter(user => user.username.includes(search))
      .sort((a,b) => a.username.indexOf(search) - b.username.indexOf(search))
  },[users,search])

  return (
    <nav className="navbar">
        <div className="nav-wrapper">
            <NavLink to='/'><img src={IMAGES.logo} className="brand-img" alt="" /></NavLink>
            { pathname === '/' && <input value={search} onChange={(e) => dispatch(toggleSearch(e.target.value))} type="text" className="search-box" placeholder="search" />}                  <div className='answersDiv'>
                    {
                        search && filteredUsers
                        .map((post) => (
                            <div key={post.id} className='answer'>
                              <img src={currentUser.avatar} className='avImg'/>
                              <h2 className='userN'>{post.username}</h2>
                            </div>
                        ))
                    }
                </div>
            <div className="nav-items">
                <NavLink to='/'><img src={IMAGES.home} className="icon" alt=""/> </NavLink>
                <NavLink to='/messenger'><img src={IMAGES.messenger} className="icon" alt=""/> </NavLink>
                <NavLink to='/create'><img src={IMAGES.add} className="icon" alt=""/></NavLink>
                <NavLink to='/explore'><img src={IMAGES.explore} className="icon" alt=""/></NavLink>
                <NavLink to='/notification'><img src={IMAGES.like} className="icon" alt=""/></NavLink>
                <NavLink to='/profile'><img src={currentUser?.avatar} className="icon user-profile" /></NavLink>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
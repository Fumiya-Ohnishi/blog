import { async } from "@firebase/util"
import { addDoc, collection } from "firebase/firestore"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { auth, db } from "../firebase"
import "./CreatePost.css"

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState()
  const [postText, setPostText] = useState()
  const navigate = useNavigate()

  const createPost = async () => {
    await addDoc(collection(db, "posts"), {
      title: title,
      postsText: postText,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    })

    navigate("/")
  }

  useEffect(() => {
    if (!isAuth) {
      navigate("/login")
    }
  }, [])

  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h2>記事を投稿する</h2>
        <div className="inputPost">
          <p>タイトル</p>
          <input
            type="text"
            placeholder="タイトルを記入"
            onChange={(e) => {
              return setTitle(e.target.value)
            }}
          />
        </div>
        <div className="inputPost">
          <p>投稿</p>
          <input
            type="text"
            placeholder="投稿内容を記入"
            onChange={(e) => {
              return setPostText(e.target.value)
            }}
          />
        </div>
        <button className="postButton" onClick={createPost}>
          投稿する
        </button>
      </div>
    </div>
  )
}

export default CreatePost

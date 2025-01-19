import { NextPage } from "next";
import Link from "next/link"

const NotFound:NextPage = () => { 
  return (
    <div>페이지 존재하지 않음. <Link href="/search">검색</Link></div>
  )
}

export default NotFound;
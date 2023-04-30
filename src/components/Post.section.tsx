import React from "react";
import styled from "styled-components";
import PostBox from "./PostBox";
import { PostType } from "@/types/PostType";

type Props = {
  result: PostType[];
  admit: PostType[];
  admissions: PostType[];
  answerkeys: PostType[];
  governments: PostType[];
  importants: PostType[];
  jobs: PostType[];
  syllabi: PostType[];
};

function PostSection({
  result,
  admit,
  admissions,
  answerkeys,
  governments,
  importants,
  jobs,
  syllabi,
}: Props) {
  return (
    <PostC>
      <PostBox title="AdmitCard" data={admit} viewall="/admit" />
      <PostBox title="Result" data={result} viewall="/result" />
      <PostBox title="Sarkari Naukri" data={jobs} viewall="/sarkari-naukri" />
      <PostBox title="Answer Key" data={answerkeys} viewall="/answer-key" />
      <PostBox title="Syllabus" data={syllabi} viewall="/syllabus" />
      <PostBox title="Admission" data={admissions} viewall="/admissions" />
      {/* <PostBox title="Scholarship" data={importants} viewall="/scholarship" /> */}
      <PostBox title="Government" data={governments} viewall="/government" />
      {/* <PostBox title="Important" data={importants} viewall="/important" /> */}
    </PostC>
  );
}

export default PostSection;

const PostC = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

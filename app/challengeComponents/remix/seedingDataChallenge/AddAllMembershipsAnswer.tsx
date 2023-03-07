import { addAllMembershipsSnippet } from "~/assets/codeSnippets/addingAModel/seedingDataSnippets";
import CodeBlock from "~/components/CodeBlock";
import Heading from "~/components/Heading";
import NextLessonLink from "~/components/NextLessonLink";
import Paragraph from "~/components/Paragraph";

const AddAllMembershipsAnswer = () => {
  return (
    <>
      <Heading level="h2">Add All Memberships Solution</Heading>
      <Paragraph darkMode>
        The solution to this challenge might look something like this:
      </Paragraph>

      <div className="my-6">
        <CodeBlock
          showLineNumbers
          filePath="prisma/seed.ts"
          snippet={addAllMembershipsSnippet}
          hideCopyButton
          highlightAdditionalLines={[
            13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
            30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
          ]}
        />
      </div>

      <Paragraph darkMode>
        Fantastic! 😅 Next, let's seed some users associated with memberships.
      </Paragraph>

      <div className="mt-12 mb-6">
        <NextLessonLink to="/remix/prisma/adding-a-prisma-model/associate-users-with-memberships">
          Next: Associate users with memberships
        </NextLessonLink>
      </div>
    </>
  );
};

export default AddAllMembershipsAnswer;

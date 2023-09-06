import { PortableText } from "@portabletext/react";

import Refractor from "react-refractor";

import jsLang from "refractor/lang/javascript";
import tsLang from "refractor/lang/typescript";
import csharpLang from "refractor/lang/csharp";
import cssLang from "refractor/lang/css";
import goLang from "refractor/lang/go";
import pythonLang from "refractor/lang/python";
import yamlLang from "refractor/lang/yaml";
import jsonLang from "refractor/lang/json";
import mysqlLang from "refractor/lang/sql";

Refractor.registerLanguage(jsLang);
Refractor.registerLanguage(tsLang);
Refractor.registerLanguage(csharpLang);
Refractor.registerLanguage(cssLang);
Refractor.registerLanguage(goLang);
Refractor.registerLanguage(pythonLang);
Refractor.registerLanguage(yamlLang);
Refractor.registerLanguage(jsonLang);
Refractor.registerLanguage(mysqlLang);

import Image from "next/image";

import { urlFor } from "@/lib/sanity-image-url";
import { Post } from "@/lib/interface";

interface BlogContentProps {
  data: Post;
}

export default function BlogContent({ data }: BlogContentProps) {
  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => (
        <Image
          src={urlFor(value).url()}
          alt="Image"
          className="rounded-lg"
          width={800}
          height={800}
        />
      ),
      codesnippet: ({ value }: { value: any }) => (
        <Refractor
          language={value.language}
          value={value.code}
          markers={value.highlightedLines}
        />
      ),
    },
  };

  return (
    <div className="prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg">
      <PortableText value={data.content} components={PortableTextComponent} />
    </div>
  );
}

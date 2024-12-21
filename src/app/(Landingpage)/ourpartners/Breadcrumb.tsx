'use client'
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';  // Next.js 13+ hook to get pathname

const Breadcrumb = () => {
  const pathname = usePathname();  // Get the full pathname

  // Split the pathname into segments and filter out empty ones
  const pathSegments = pathname.split('/').filter(Boolean);

  // Define the static part of the breadcrumb (hard-coded)
  const staticBreadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Our-partners' }  // 'Services' is not a link
  ];

  // Function to capitalize the first letter of a string
  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Generate dynamic breadcrumbs for any segment after "/services"
  const dynamicBreadcrumbs = pathSegments.slice(1).map((segment, index) => {
    const href = '/services/' + pathSegments.slice(1, index + 2).join('/');
    return { label: capitalize(segment), href };
  });

  // Combine static breadcrumbs with dynamic ones
  const breadcrumbs = [...staticBreadcrumbs, ...dynamicBreadcrumbs];

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{
        color: 'white'
    }}>
      {breadcrumbs.map((breadcrumb, index) => (
        // If it's the last breadcrumb (dynamic part), display as plain text and underline it
        index === breadcrumbs.length - 1 ? (
          <Typography 
            key={breadcrumb.label}
            sx={{ textDecoration: 'underline' }}  // Underline the last breadcrumb
          >
            {breadcrumb.label}
          </Typography>
        ) : (
          // For 'Home' breadcrumb, underline only on hover
          <Link
            key={breadcrumb.href}
            href={breadcrumb.href}
            color="inherit"
            sx={{
              textDecoration: 'none',  // Remove underline by default
              '&:hover': {
                textDecoration: breadcrumb.label==='Home' ? 'underline': 'none'  // Underline only on hover
              },
            }}
          >
            {breadcrumb.label}
          </Link>
        )
      ))}
    </Breadcrumbs>
  );
};

export default Breadcrumb;

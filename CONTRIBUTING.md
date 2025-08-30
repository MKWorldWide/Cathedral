# Contributing to The Cathedral

> *"In resonance we trust, in harmony we build."*

## 🌟 Before You Begin

1. **Resonance Check**: Ensure your contributions align with our [Code of Conduct](CODE_OF_CONDUCT.md).
2. **Divine Inspiration**: Check the [issues](https://github.com/MKWorldWide/Cathedral/issues) for open tasks or discussions.
3. **Sovereign Alignment**: Open an issue to discuss significant changes before submitting a pull request.

## 🛠️ Development Setup

### Prerequisites
- Node.js 20.x (use [nvm](https://github.com/nvm-sh/nvm) for version management)
- npm 9+
- Python 3.11+ (for documentation)

### Installation

```bash
# Clone the repository
git clone https://github.com/MKWorldWide/Cathedral.git
cd Cathedral

# Install dependencies
npm ci

# Set up git hooks (optional but recommended)
npx simple-git-hooks
```

## 🔄 Development Workflow

1. **Create a Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

2. **Make Changes**
   - Follow the existing code style
   - Write tests for new features
   - Update documentation as needed

3. **Run Tests**
   ```bash
   # Run all tests
   npm test
   
   # Run tests in watch mode
   npm test -- --watch
   
   # Run linting
   npm run lint
   
   # Format code
   npm run format
   ```

4. **Commit Your Changes**
   ```bash
   # Stage changes
   git add .
   
   # Commit with a meaningful message
   git commit -m "feat: add amazing feature"
   ```

5. **Push and Open a Pull Request**
   ```bash
   git push origin feature/amazing-feature
   ```

## 📝 Pull Request Guidelines

- Reference any related issues in your PR description
- Ensure all tests pass
- Update documentation as needed
- Keep PRs focused and small when possible
- Use the PR template if available

## 🧪 Testing

We use Jest for testing. Add tests for new features and ensure all tests pass before submitting a PR.

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage
```

## 📚 Documentation

Documentation is built using MkDocs. To preview your changes locally:

```bash
# Install MkDocs and theme
pip install mkdocs mkdocs-material

# Serve docs locally
mkdocs serve
```

## 🛡️ Security

Found a security vulnerability? Please report it responsibly to our security team at [security@mkworldwide.com](mailto:security@mkworldwide.com).

## 🙏 Acknowledgments

- Thank you for contributing to The Cathedral
- Your resonance strengthens our collective vision
- May your code be bug-free and your commits atomic
